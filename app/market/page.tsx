// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";

export default async function CreateStock() {

  const stocks = await prisma.stock.findMany();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Market</title>
      </Head>
      <div>
        <div className="w-full max-w-md">
          <div>
            <h3>View Market</h3>
            <table border={1} cellPadding={8}>
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
        </div>
      </div>
    </>
  );
}
