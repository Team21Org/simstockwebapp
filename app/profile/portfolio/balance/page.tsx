import Head from "next/head";
// import Image from 'next/image';
// import Link from 'next/link';

export default function accountbalance() {
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
        <p>Current Balance: ${accountBalance.toString()}</p>
        <p>What would you like to do?</p>
        <Form action={handleSubmit}>
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
        </Form>
      </div>
    </>
  );
}
