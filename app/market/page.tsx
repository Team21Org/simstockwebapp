// app/

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import Link from "next/link";
import { auth } from "../../auth";
import { getMarketData, randomizeStockPrices } from "../lib/actions";
import { TradeForm } from "../lib/ui/tradeconfirm";

export default async function ViewMarket() {
  const session = await auth();

  await randomizeStockPrices();
  const stocks = await getMarketData();
  if (!session?.user?.email) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
  
        <h3>View Market</h3>
        <h1 className="text-xl font-bold mb-4">You must be logged in to view the Market.</h1>
        <p id="redirectTxt">Please select either option below:</p>
        <Link id="loginRedirect" href="/login">Click Here To Login!</Link> 
        <Link id="signupRedirect" href="/signup">Make An Account!</Link>
      </div>
    );
  }

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
              <th>Day Open</th>
              <th>Day High</th>
              <th>Day Low</th>
              <th>Price Change</th>
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
                <td>{Number(stock.openPrice)}</td>
                <td>{Number(stock.dayHigh)}</td>
                <td>{Number(stock.dayLow)}</td>
                <td>{Number(stock.priceChange)}</td>
                <td>
                  <TradeForm
                    stockId={stock.stockId}
                    maxQuantity={stock.initialVolume}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
