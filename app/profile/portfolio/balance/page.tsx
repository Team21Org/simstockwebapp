import Head from "next/head";
import prisma from "../../../lib/prisma";

export async function handleBalanceTransaction(formData: FormData) {
  "use server";

  const type = formData.get("balance") as string; // "withdraw" or "deposit"
  const amount = parseFloat(formData.get("amount") as string);
  const userId = "currentUserId"; // Replace with the actual user ID from the session

  if (isNaN(amount) || amount <= 0) {
    throw new Error("Invalid amount. Please enter a positive number.");
  }

  const portfolio = await prisma.portfolio.findFirst({
    where: { profileId: userId },
  });

  if (!portfolio) {
    throw new Error("Portfolio not found.");
  }

  if (type === "withdraw") {
    if (Number(portfolio.cash) < amount) {
      throw new Error("Insufficient funds for withdrawal.");
    }

    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: { cash: { decrement: amount } },
    });
  } else if (type === "deposit") {
    await prisma.portfolio.update({
      where: { id: portfolio.id },
      data: { cash: { increment: amount } },
    });
  } else {
    throw new Error("Invalid transaction type.");
  }

  return { success: true };
}

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
        <p>What would you like to do?</p>
        <form>
          <input type="radio" id="withdraw" name="balance" value="withdraw" />
          <label htmlFor="withdraw">Withdraw</label>
          <br />
          <input type="radio" id="deposit" name="balance" value="deposit" />
          <label htmlFor="deposit">Deposit</label>
          <br />
        </form>
        <p>Amount: </p>
        <form>
          <input type="text" id="amount" name="amount" />
          {/* <!-- verify that input is a double --> */}
        </form>
        <br />
        <input className="btn" type="submit" value="Submit" />
        {/* <!-- JavaScript to add input balance to the account. Maybe a popup displaying success or something --> */}
      </div>
    </>
  );
}
