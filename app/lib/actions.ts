// app/api/trade/route.tsx
import { MarketSchedule } from "@prisma/client";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

/**
 * Returns true if the market is open according to the given schedule.
 */
export function isMarketOpen(schedule: MarketSchedule): boolean {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0 || day === 6) return false; // Closed on weekends

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const [openHour, openMinute] = schedule.startTime.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.endTime.split(":").map(Number);
  const openingMinutes = openHour * 60 + openMinute;
  const closingMinutes = closeHour * 60 + closeMinute;

  return currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;
}

/**
 * Registers a new user with validation and hashed password.
 */
export async function registerUser({
  email,
  confirmEmail,
  password,
  confirmPassword,
  name,
  userName,
}: {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  name: string;
  userName: string;
}) {
  const authSecret = process.env.AUTH_SECRET;
  if (password !== confirmPassword) throw new Error("Passwords do not match.");
  if (email !== confirmEmail) throw new Error("Email addresses do not match.");

  const hashedPassword = bcrypt.hashSync(password + authSecret, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      userName,
      role: "USER",
      profile: {
        create: {
          email,
          bio: "",
          Portfolio: {
            create: {
              cash: 0.0,
              totalValue: 0.0,
            },
          },
        },
      },
    },
  });
}

/**
 * Handles a trade action (buy/sell) for a user.
 * Requires the session to be passed in for user context.
 */
export async function tradeAction(
  formData: FormData,
  session: { user: { email: string } }
) {
  const stockId = formData.get("stockId") as string;
  const quantity = Number(formData.get("quantity"));
  const type = formData.get("type") as "BUY" | "SELL";

  if (!session?.user?.email) throw new Error("Not authenticated.");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: { include: { Portfolio: true } } },
  });
  if (!user || !user.profile?.Portfolio)
    throw new Error("User portfolio not found.");

  const stock = await prisma.stock.findUnique({ where: { stockId } });
  if (!stock) throw new Error("Stock not found.");

  const portfolioId = user.profile.Portfolio.id;
  const portfolioStock = await prisma.portfolioStock.findUnique({
    where: { portfolioId_stockId: { portfolioId, stockId } },
  });

  const userCash = Number(user.profile.Portfolio.cash);
  const stockPrice = Number(stock.currentPrice);

  if (type === "BUY") {
    const totalCost = stockPrice * quantity;
    if (userCash < totalCost) throw new Error("Insufficient funds.");
    if (stock.initialVolume < quantity)
      throw new Error("Not enough stock available.");

    await prisma.stock.update({
      where: { stockId },
      data: { initialVolume: stock.initialVolume - quantity },
    });

    if (portfolioStock) {
      await prisma.portfolioStock.update({
        where: { id: portfolioStock.id },
        data: {
          quantity: portfolioStock.quantity + quantity,
          averageCost:
            (Number(portfolioStock.averageCost) * portfolioStock.quantity +
              totalCost) /
            (portfolioStock.quantity + quantity),
        },
      });
    } else {
      await prisma.portfolioStock.create({
        data: {
          portfolioId,
          stockId,
          quantity,
          averageCost: stockPrice,
        },
      });
    }

    await prisma.portfolio.update({
      where: { id: portfolioId },
      data: { cash: userCash - totalCost },
    });
  } else if (type === "SELL") {
    if (!portfolioStock || portfolioStock.quantity < quantity)
      throw new Error("Not enough shares to sell.");

    await prisma.stock.update({
      where: { stockId },
      data: { initialVolume: stock.initialVolume + quantity },
    });

    await prisma.portfolioStock.update({
      where: { id: portfolioStock.id },
      data: { quantity: portfolioStock.quantity - quantity },
    });

    await prisma.portfolio.update({
      where: { id: portfolioId },
      data: { cash: userCash + stockPrice * quantity },
    });
  } else {
    throw new Error("Invalid trade type.");
  }

  await prisma.transaction.create({
    data: {
      portfolio: { connect: { id: portfolioId } },
      stock: { connect: { stockId } },
      user: { connect: { id: user.id } },
      type,
      quantity,
      amount: stockPrice * quantity,
      createdAt: new Date(),
    },
  });

  return { success: true };
}
