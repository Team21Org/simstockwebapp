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
        <h1 id="balTitle">Current Balance: ${Number(cash)}</h1>
        <h1 id="balSub">Please Select From The Options Below</h1>
        <form action={updateCash}>
          <input
            type="radio"
            id="balRadio"
            name="balance"
            value="withdraw"
            required
          />
          <label id="balRadio" htmlFor="withdraw">Withdraw</label>
          <br />
          <input
            type="radio"
            id="balRadio"
            name="balance"
            value="deposit"
            required
          />
          <label id="balRadio" htmlFor="deposit">Deposit</label>
          <br />
          <h1 id="balSub2">Amount </h1>
          <input id="amtInput" type="number" name="amount" min="1" placeholder="$" required />
          <br />
          <input id="balBtn" type="submit" value="SUBMIT" />
        </form>
      </div>
    </>
  );
}
