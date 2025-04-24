import Head from "next/head";
import { auth } from "../../../auth";

export default async function Portfolio() {
  const session = await auth();
  
    let content;

    if (!session?.user?.email) {
      content = (
        <div>
          <h1>You must be logged in to view this page.</h1>
        </div>
      );
    } else {
      content = (
        <div>
          <table>
            <thead>
              <tr>
                <th>Stock Name</th>
                <th>Ticker Number</th>
                <th>Quantity Owned</th>
                <th>Purchase Price</th>
                <th>Purchase Date</th>
                <th>Daily High</th>
                <th>Daily Low</th>
                <th>Opening Price</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          <p>Account Balance</p>
        </div>
      );
    }

  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Portfolio</title>
      </Head>
        <h3>Portfolio</h3>
      {content}
    </>
  );
}
