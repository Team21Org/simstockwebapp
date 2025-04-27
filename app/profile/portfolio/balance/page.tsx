// ./app/profile/portfolio/balance/page.tsx

import Head from "next/head";
import { updateCash, getCash } from "../../../lib/actions";

export default async function AccountBalance() {
  const cash = await getCash();

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
        <p>Current Balance: ${Number(cash)}</p>
        <p>What would you like to do?</p>
        <form action={updateCash}>
          <input
            type="radio"
            id="withdraw"
            name="balance"
            value="withdraw"
            required
          />
          <label htmlFor="withdraw">Withdraw</label>
          <br />
          <input
            type="radio"
            id="deposit"
            name="balance"
            value="deposit"
            required
          />
          <label htmlFor="deposit">Deposit</label>
          <br />
          <p>Amount: </p>
          <input type="number" id="amount" name="amount" min="1" required />
          <br />
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
