// ./app/profile/portfolio/page.tsx

import Head from "next/head";
import prisma from "../../lib/prisma";
import { auth } from "../../../auth"; // Assuming you're using next-auth for authentication

export default async function Portfolio() {
  // Get the current user's session
  const session = await auth();
  if (!session || !session.user) {
    return <p>You must be logged in to view your portfolio.</p>;
  }

  // Fetch the user's portfolio based on their profile ID
  const portfolio = await prisma.portfolio.findFirst({
    where: { profileId: session.user.id }, // Assuming `session.user.id` matches `profileId`
    include: {
      stocks: {
        include: {
          stock: true, // Include stock details
        },
      },
    },
  });

  if (!portfolio) {
    return <p>No portfolio found for this user.</p>;
  }

  async function tradeStock(formData: FormData) {
    "use server";
    const ticker = formData.get("ticker") as string;
    const type = formData.get("type") as string;
    const quantity = parseInt(formData.get("quantity") as string);

    const stock = await prisma.stock.findUnique({ where: { ticker } });
    if (!stock) throw new Error("Stock not found.");

    const totalCost = Number(stock.currentPrice) * quantity;

    if (type === "BUY") {
      if (Number(portfolio.cash) < totalCost) {
        throw new Error("Insufficient cash to complete the transaction.");
      }

      await prisma.portfolio.update({
        where: { id: portfolio.id },
        data: {
          cash: { decrement: totalCost },
          stocks: {
            upsert: {
              where: {
                AND: [{ portfolioId: portfolio.id }, { stock }],
              },
              update: { quantity: { increment: quantity } },
              create: {
                stockId: stock.id,
                quantity,
                averageCost: stock.currentPrice,
              },
            },
          },
        },
      });
    } else if (type === "SELL") {
      const portfolioStock = await prisma.portfolioStock.findUnique({
        where: { portfolioId: portfolio.id, stockId: stock.id },
      });

      if (!portfolioStock || portfolioStock.quantity < quantity) {
        throw new Error("Insufficient stock quantity to sell.");
      }

      await prisma.portfolio.update({
        where: { id: portfolio.id },
        data: {
          cash: { increment: totalCost },
          stocks: {
            update: {
              where: {
                AND: [{ portfolioId: portfolio.id }, { stockId: stock.id }],
              },
              data: { quantity: { decrement: quantity } },
            },
          },
        },
      });
    }
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Portfolio</title>
      </Head>
      <div>
        <h3>Your Portfolio</h3>
        <p>Cash: ${portfolio.cash.toFixed(2)}</p>
        <table className="border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Ticker</th>
              <th>Quantity Owned</th>
              <th>Average Cost</th>
              <th>Current Price</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(portfolio.stocks) &&
              portfolio.stocks.map((portfolioStock) => (
                <tr key={portfolioStock.stockId}>
                  <td>{portfolioStock.stock.companyName}</td>
                  <td>{portfolioStock.stock.ticker}</td>
                  <td>{portfolioStock.quantity}</td>
                  <td>${portfolioStock.averageCost.toFixed(2)}</td>
                  <td>${portfolioStock.stock.currentPrice.toFixed(2)}</td>
                  <td>
                    <form action={tradeStock}>
                      <input
                        type="hidden"
                        name="stockId"
                        value={portfolioStock.stockId}
                      />
                      <label>
                        Type:
                        <select
                          name="type"
                          required
                          className="border p-1 ml-2"
                        >
                          <option value="BUY">Buy</option>
                          <option value="SELL">Sell</option>
                        </select>
                      </label>
                      <br />
                      <label>
                        Quantity:
                        <input
                          type="number"
                          name="quantity"
                          required
                          className="border p-1 ml-2"
                        />
                      </label>
                      <br />
                      <button
                        type="submit"
                        className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
                      >
                        Submit
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
