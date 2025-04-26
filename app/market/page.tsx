// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import { auth } from "../../auth";
import { isMarketOpen } from "../lib/actions";

export default async function ViewMarket() {
  const session = await auth();
  let content;

  const stocks = await prisma.stock.findMany();

  async function handleBuy(stock) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
          profile: {
            include: {
              Portfolio: true,
            },
          },
        },
      });

      //purchase errors
      if (user?.profile?.Portfolio?.cash < stock.currentPrice) {
        alert("Insufficient funds to buy this stock.");
        return;
      }
      if (stock.initialVolume <= 0) {
        alert("Stock is out of stock.");
        return;
      }
      
      //update the stock to remove one
      await prisma.stock.update({
        where: { stockId: stock.stockId },
        data: { initialVolume: stock.initialVolume - 1},
      });

      //update the portfolio to add the stock
      await prisma.portfolio.upsert({
        where: { id: { userId: user.id, stockId: stock.stockId } },
        update: { quantity: { increment: 1 } },
        create: { userId: user.id, stockId: stock.stockId, quantity: 1 },
      });

      //update the portfolio to remove the cash
      await prisma.portfolio.update({
        where: { id: user.profile.Portfolio.id },
        data: {
          cash: Number(user.profile.Portfolio.cash) - stock.currentPrice,
        },
      });

  } catch (error) {}
}

  if (!session?.user?.email) {
    content = (
      <div>
        <h1>You must be logged in to view this page.</h1>
      </div>
    );
  } else {
    const marketSchedule = await prisma.marketSchedule.findFirst();

    if (
      !marketSchedule ||
      !marketSchedule.startTime ||
      !marketSchedule.endTime
    ) {
      content = (
        <div>
          <h1>Market schedule is not properly configured.</h1>
        </div>
      );
    } else {
      if (!isMarketOpen) {
        content = (
          <>
            <div>
              <h1>The market is currently closed.</h1>
            </div>
          </>
        );
      } else {
        content = (
          <>
            <div className="w-full max-w-md">
              <h2 id="stockList">Stock List</h2>
              <table id="stockTable" border={1} cellPadding={8}>
                <thead>
                  <tr>
                    <th>ID#</th>
                    <th>Stock Ticker</th>
                    <th>Company Name</th>
                    <th>Daily Volume</th>
                    <th>Open Price</th>
                    <th>Current Price</th>
                    <th>Daily High</th>
                    <th>Daily Low</th>
                    <th>Purchase</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((stock) => (
                    <tr key={stock.stockId}>
                      <td>{stock.stockId}</td>
                      <td>{stock.ticker}</td>
                      <td>{stock.companyName}</td>
                      <td>{stock.initialVolume}</td>
                      <td>${stock.openPrice.toFixed(2)}</td>
                      <td>${stock.currentPrice.toFixed(2)}</td>
                      <td>${stock.dayHigh.toFixed(2)}</td>
                      <td>${stock.dayLow.toFixed(2)}</td>
                      <td>
                        {isMarketOpen && (
                          <button
                            onClick={() => handleBuy(stock)}
                            disabled={stock.initialVolume <= 0}
                          >
                            Buy
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
      }
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Market</title>
      </Head>
      <div>
        <h3>View Market</h3>
        {content}
      </div>
    </>
  );
}
