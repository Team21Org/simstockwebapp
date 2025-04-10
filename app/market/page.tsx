"use client";
// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";

export default function CreateStock() {
  async function createStock(formData: FormData) {
    "use server";
    const stockticker = formData.get("Stock Ticker") as string;
    const companyName = formData.get("Company Name") as string;

    const dailyvolume = formData.get("Daily Volume") as string;
    const openprice = formData.get("Open Price") as string;

    await prisma.stock.create({
      data: {
        ticker: stockticker,
        companyName,
        dailyVolume: Number(dailyvolume),
        openPrice: parseFloat(openprice),
      },
    });
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
        <h3>Create Stock</h3>
        <form onSubmit={handleSubmit} className="mb-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Stock Ticker"
            value={stockticker}
            onChange={(e) => {
              const value = e.target.value.toUpperCase(); // Convert to uppercase
              if (value.length <= 4) {
                // Ensure it's less than or equal to 4 characters
                setStockTicker(value);
              } else {
                throw new Error("Stock Ticker must be 4 characters or less");
              }
            }}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Daily Volume"
            value={dailyvolume}
            onChange={(e) => {
              const value = e.target.value;
              if (Number(value) >= 0 && Number.isInteger(Number(value))) {
                // Ensure it's a positive integer
                setDailyVolume(value);
              } else {
                throw new Error("Daily Volume must be a positive integer");
              }
            }}
            className="border p-2 mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Open Price"
            value={openprice}
            onChange={(e) => setOpenPrice(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Item
          </button>
        </form>

        <div className="w-full max-w-md">
          {/* Display the fetched data */}
          <div>
            <h2>Stock List</h2>
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
                {stock.map((item, index) => (
                  <tr key={item.id || index}>
                    <td>{index + 1}</td>
                    <td>{item.stockticker}</td>
                    <td>{item.companyName}</td>
                    <td>{item.dailyvolume}</td>
                    <td>{item.openprice}</td>
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
