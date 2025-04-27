// app/api/trade/route.ts
import { MarketSchedule } from "@prisma/client";
import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

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
export async function tradeAction(formData: FormData) {
  try {
    const session = await auth();
    const stockId = formData.get("stockId") as string;
    const quantity = Number(formData.get("quantity"));
    const type = formData.get("type") as string;
    console.log("Trade type received:", type);

    if (!session?.user?.email) return { error: "Not authenticated." };

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { profile: { include: { Portfolio: true } } },
    });
    if (!user || !user.profile?.Portfolio)
      return { error: "User portfolio not found." };

    const stock = await prisma.stock.findUnique({ where: { stockId } });
    const portfolioId = user.profile.Portfolio.id;
    const portfolioStock = await prisma.portfolioStock.findUnique({
      where: { portfolioId_stockId: { portfolioId, stockId } },
    });

    const userCash = Number(user.profile.Portfolio.cash);
    const stockPrice = Number(stock.currentPrice);
    const totalCost = stockPrice * quantity;

    if (type === "BUY") {
      if (userCash < totalCost) return { error: "Not enough cash available." };
      if (stock.initialVolume < quantity)
        return { error: "Not enough stock available." };

      // Update stock volume
      await prisma.stock.update({
        where: { stockId },
        data: { initialVolume: stock.initialVolume - quantity },
      });

      if (portfolioStock) {
        // Update average cost and quantity
        const newQuantity = portfolioStock.quantity + quantity;
        const newTotalCost =
          Number(portfolioStock.averageCost) * portfolioStock.quantity +
          totalCost;
        const newAverageCost = newTotalCost / newQuantity;

        await prisma.portfolioStock.update({
          where: { id: portfolioStock.id },
          data: {
            quantity: newQuantity,
            averageCost: newAverageCost,
            purchasePrice: stockPrice,
          },
        });
      } else {
        await prisma.portfolioStock.create({
          data: {
            portfolioId,
            stockId,
            quantity,
            averageCost: stockPrice,
            purchasePrice: stockPrice,
          },
        });
      }

      // Deduct cash
      await prisma.portfolio.update({
        where: { id: portfolioId },
        data: { cash: userCash - totalCost },
      });
    } else if (type === "SELL") {
      if (!portfolioStock || portfolioStock.quantity < quantity)
        return { error: "Not enough shares to sell." };

      // Update stock volume
      await prisma.stock.update({
        where: { stockId },
        data: { initialVolume: stock.initialVolume + quantity },
      });

      // Update portfolio stock
      await prisma.portfolioStock.update({
        where: { id: portfolioStock.id },
        data: { quantity: portfolioStock.quantity - quantity },
      });

      // Add cash
      await prisma.portfolio.update({
        where: { id: portfolioId },
        data: { cash: userCash + stockPrice * quantity },
      });
    } else {
      return { error: "Invalid trade type." };
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
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return { error: errorMessage };
  }
}

export async function getMarketData() {
  const stocks = await prisma.stock.findMany();
  return stocks;
}

export async function getCash() {
  const session = await auth();
  if (!session?.user?.email) throw new Error("Not authenticated.");

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: { include: { Portfolio: true } } },
  });
  if (!user || !user.profile?.Portfolio)
    throw new Error("User portfolio not found.");

  return user.profile.Portfolio.cash;
}

export async function updateCash(formData: FormData) {
  "use server";
  const session = await auth();
  if (!session?.user?.email) throw new Error("Not authenticated.");

  const amount = Number(formData.get("amount"));
  const action = formData.get("balance"); // "withdraw" or "deposit"

  // Find the user's portfolio
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { profile: { include: { Portfolio: true } } },
  });
  if (!user || !user.profile?.Portfolio)
    throw new Error("Portfolio not found.");

  const portfolioId = user.profile.Portfolio.id;
  let newCashAmount = Number(user.profile.Portfolio.cash);

  if (action === "withdraw") {
    if (newCashAmount < amount) throw new Error("Insufficient funds.");
    newCashAmount -= amount;
  } else if (action === "deposit") {
    newCashAmount += amount;
  } else {
    throw new Error("Invalid action.");
  }

  await prisma.portfolio.update({
    where: { id: portfolioId },
    data: { cash: newCashAmount },
  });
  redirect("/profile/portfolio/balance");
}

export async function randomizeStockPrices() {
  const stocks = await getMarketData();
  await Promise.all(
    stocks.map(async (stock) => {
      // Random change between -5% and +5% of the current price
      const percentChange = Math.random() * 0.1 - 0.05;
      const increment = Number(stock.currentPrice) * percentChange;
      await prisma.stock.update({
        where: { stockId: stock.stockId },
        data: {
          currentPrice: Number(stock.currentPrice) + increment,
        },
      });
    })
  );
}
