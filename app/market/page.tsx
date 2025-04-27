// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import { auth } from "../../auth";

export default async function ViewMarket() {
  const session = await auth();
  const stocks = await prisma.stock.findMany();
  const marketSchedule = await prisma.marketSchedule.findFirst();

  // Server action for trading

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
