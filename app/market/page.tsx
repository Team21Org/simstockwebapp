// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import { auth } from "../../auth";

export default function ViewMarket() {
  const session = await auth();
  const stocks = await prisma.stock.findMany();
  const marketSchedule = await prisma.marketSchedule.findFirst();

  // Server action for trading
  async function tradeAction(formData: FormData) {
    "use server";
    const stockId = formData.get("stockId") as string;
    const quantity = Number(formData.get("quantity"));
    const type = formData.get("type") as "BUY" | "SELL";
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: { profile: { include: { Portfolio: true } } },
    });
    if (!user || !user.profile?.Portfolio) return;

    const stock = await prisma.stock.findUnique({ where: { stockId } });
    if (!stock) return;

    const portfolioId = user.profile.Portfolio.id;
    const portfolioStock = await prisma.portfolioStock.findUnique({
      where: { portfolioId_stockId: { portfolioId, stockId } },
    });

    if (type === "BUY") {
      const totalCost = Number(stock.currentPrice) * quantity;
      if (Number(user.profile.Portfolio.cash) < totalCost)
        throw new Error("Insufficient funds");
      if (stock.initialVolume < quantity)
        throw new Error("Not enough stock available");

      // Update stock volume
      await prisma.stock.update({
        where: { stockId },
        data: { initialVolume: stock.initialVolume - quantity },
      });

      // Update portfolio stock
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
            averageCost: stock.currentPrice,
          },
        });
      }

      // Update cash
      await prisma.portfolio.update({
        where: { id: portfolioId },
        data: { cash: Number(user.profile.Portfolio.cash) - totalCost },
      });
    } else if (type === "SELL") {
      if (!portfolioStock || portfolioStock.quantity < quantity)
        throw new Error("Not enough shares to sell");

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

      // Update cash
      await prisma.portfolio.update({
        where: { id: portfolioId },
        data: {
          cash:
            Number(user.profile.Portfolio.cash) +
            Number(stock.currentPrice) * quantity,
        },
      });
    }

    // Add transaction
    await prisma.transaction.create({
      data: {
        portfolio: { connect: { id: portfolioId } },
        stock: { connect: { stockId } },
        user: { connect: { id: user.id } },
        type,
        quantity,
        amount: Number(stock.currentPrice) * quantity,
        createdAt: new Date(),
      },
    });
  }

  // Render
  return (
    <>
      <Head>
        <title>Stock Sim | Market</title>
      </Head>
      <div>
        <h3>View Market</h3>
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Available</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.stockId}>
                <td>{stock.companyName}</td>
                <td>{stock.ticker}</td>
                <td>${stock.currentPrice.toFixed(2)}</td>
                <td>{stock.initialVolume}</td>
                <td>
                  <form action={tradeAction}>
                    <input type="hidden" name="stockId" value={stock.stockId} />
                    <input
                      type="number"
                      name="quantity"
                      min={1}
                      max={stock.initialVolume}
                      defaultValue={1}
                      required
                    />
                    <button type="submit" name="type" value="BUY">
                      Buy
                    </button>
                    <button type="submit" name="type" value="SELL">
                      Sell
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
