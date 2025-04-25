// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import { auth } from "../../auth";

export default async function ViewMarket() {
  const session = await auth();
  let content;

  const stocks = await prisma.stock.findMany();

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
      const now = new Date();

      const isWeekend = now.getDay() === 0 || now.getDay() === 6; //comment out the 0 to record on sunday

      const startTime = new Date(marketSchedule.startTime);
      const endTime = new Date(marketSchedule.endTime);

      console.log("Current Time (now):", now);
      console.log("Market Start Time (startTime):", startTime);
      console.log("Market End Time (endTime):", endTime);

      const isMarketOpen = !isWeekend && now >= startTime && now <= endTime;

      if (!isMarketOpen) {
        content = (
          <div>
            <h1>The market is currently closed.</h1>
            <p>
              {isWeekend
                ? "The market is closed on weekends."
                : `Market hours: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}`}
            </p>
          </div>
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
