// ./app/profile/portfolio/page.tsx

import Head from "next/head";
// import Image from 'next/image';
// import Link from "next/link";
import prisma from "../../lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const stocks = await prisma.stock.findMany({
  orderBy: {
    stockId: "asc",
  },
});

export default function Portfolio() {
  async function tradeStock(formData: FormData) {
    "use server";
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
        <h3>Portfolio</h3>
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
          <tbody>{}</tbody>
        </table>
        <p>Trade</p>
      </div>
    </>
  );
}
