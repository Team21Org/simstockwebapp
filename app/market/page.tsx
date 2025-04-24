// src/app/page.js

// Project: Stock Trading System Simulator
// Display Create Stock Page

import prisma from "../lib/prisma";
import Head from "next/head";
import { revalidatePath } from "next/cache";
import { auth } from "../../auth";

import { redirect } from "next/navigation";

export default async function CreateStock() {

    const session = await auth();

    let content;
  
    if (!session?.user?.email) {
      content = (
        <div>
          <h1>You must be logged in to view this page.</h1>
        </div>
      );
    }
    else {
      async function createStock(formData: FormData) {
        "use server";
        const ticker = formData.get("Stock Ticker") as string;
        const companyName = formData.get("Company Name") as string;
  
        const initialVolume = parseInt(formData.get("Daily Volume") as string);
        const openPrice = parseFloat(formData.get("Open Price") as string);
  
        await prisma.stock.create({
          data: {
            stockId: Math.floor(Math.random() * 1000000),
            ticker,
            companyName,
            initialVolume,
            openPrice,
          },
        });
  
        revalidatePath("/market");
        redirect("/market");
      }
  
      const stocks = await prisma.stock.findMany();
  
      content = (
        <>
          <form action={createStock} id="addStockForm">
            <h1 id="addStockTxt">Add New Stock</h1>
            <label htmlFor="Stock Ticker">Stock Ticker</label>
            <input
              type="text"
              name="Stock Ticker"
              id="Stock Ticker"
              required
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label htmlFor="Company Name">Company Name</label>
            <input
              type="text"
              name="Company Name"
              id="Company Name"
              required
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label htmlFor="Daily Volume">Daily Volume</label>
            <input
              type="number"
              name="Daily Volume"
              id="Daily Volume"
              required
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <label htmlFor="Open Price">Open Price</label>
            <input
              type="number"
              name="Open Price"
              id="Open Price"
              step="0.01"
              required
              className="border border-gray-300 p-2 mb-4 w-full"
            />
            <button type="submit">Add Item</button>
          </form>
  
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