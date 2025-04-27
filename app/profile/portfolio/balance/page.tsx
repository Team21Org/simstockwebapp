// ./app/profile/portfolio/balance/page.tsx

import Head from "next/head";
// import Image from 'next/image';
// import Link from 'next/link';
import { FormEvent } from "react";
import { updateCash } from "../../../lib/actions";

export default async function accountBalance() {
  // Dummy balance value for demonstration
  const balance = await prisma.portfolio.findUnique({
    where: { id: id },
    select: { cash: true },
  });

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Balance</title>
      </Head>
      <div>
        <h3>Balance</h3>
        <p>Current Balance: ${balance.toString()}</p>
        <p>What would you like to do?</p>
        <form action={updateCash}>
          <input type="radio" id="withdraw" name="balance" value="withdraw" />
          <label htmlFor="withdraw">Withdraw</label>
          <br />
          <input type="radio" id="deposit" name="balance" value="deposit" />
          <label htmlFor="deposit">Deposit</label>
          <br />
          <p>Amount: </p>
          <input type="text" id="amount" name="amount" />
          <br />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
