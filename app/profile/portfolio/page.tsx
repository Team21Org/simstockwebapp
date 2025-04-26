import Head from "next/head";
import Link from "next/link";

export default function Portfolio() {
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
        <table>
          <thead>
            <tr>
              <th>Stock Name</th>
              <th>Ticker</th>
              <th>Quantity Owned</th>
              <th>Average Cost</th>
              <th>Opening Price</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <br />
        <h3>Transaction History</h3>
        <table>
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
          </tbody>
        </table>
        <h3>Balance</h3>
        <p>Current Balance:</p>
        <div>
          <Link className="btn" href="./balance">
            Access Balance
          </Link>
        </div>
      </div>
    </>
  );
}
