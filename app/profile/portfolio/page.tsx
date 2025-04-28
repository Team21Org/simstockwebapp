import Head from "next/head";
import Link from "next/link";
import React from "react";
import { auth } from "../../../auth";
import prisma from "../../lib/prisma";

export default async function Portfolio() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div>
        <h3>Portfolio</h3>
        <h1>You must be logged in to view your Portfolio.</h1>
        <p id="redirectTxt">Please select either option below:</p>
        <Link id="loginRedirect" href="/login">
          Click Here To Login!
        </Link>
        <Link id="signupRedirect" href="/signup">
          Make An Account!
        </Link>
      </div>
    );
  } else {
    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
      include: {
        profile: {
          include: {
            Portfolio: true,
          },
        },
      },
    });

    const portfolioId = user?.profile?.Portfolio?.id;
    const portfolioStocks = await prisma.portfolioStock.findMany({
      where: { portfolioId },
      include: {
        stock: true,
      },
    });
    const transactions = await prisma.transaction.findMany({
      where: { portfolioId },
      include: {
        stock: true,
      },
    });
    const accountBalance = user?.profile?.Portfolio?.cash || 0;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Stock Sim | Portfolio</title>
        </Head>
        <div>
          <h3>Portfolio</h3>
          <h1 id="portTitle"> Welcome To Your Portfolio {user.name} </h1>
          <table id="portTable">
            <thead>
              <tr>
                <th>Stock Name</th>
                <th>Ticker</th>
                <th>Quantity Owned</th>
                <th>Purchased Price</th>
                <th>Current Price</th>
              </tr>
            </thead>
            <tbody>
              {portfolioStocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.stock.companyName}</td>
                  <td>{stock.stock.ticker}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.stock.currentPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <h1 id="portTitle3">Current Balance On Account: ${accountBalance.toFixed(2)} <Link id="portBal" href="./portfolio/balance"> Deposit/Withdraw </Link></h1>
          <h1 id="portTitle2" >Transaction History</h1>
          <table id="portTable">
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Ticker Number</th>
                <th>Quantity</th>
                <th>Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>${transaction.purchasePrice.toFixed(2)}</td>
                  <td>{transaction.stock?.ticker || "CASH"}</td>
                  <td>{transaction.quantity}</td>
                  <td>
                    {new Date(transaction.createdAt).toLocaleDateString()}
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
