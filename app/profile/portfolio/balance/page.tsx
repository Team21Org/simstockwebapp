
import Head from "next/head";
import Form from "next/form";
import { auth } from "../../../../auth";
import prisma from "../../../lib/prisma";

export default async function accountbalance() {
  const session = await auth();
 
  if (!session?.user?.email) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      profile: {
        include: {
          Portfolio: true, 
        },
      },
    },
  });

  const accountBalance = user?.profile?.Portfolio?.cash || 0;

  async function handleSubmit(formData: FormData){
    "use server";

    const action = formData.get("balance") as string;
    const amount = parseFloat(formData.get("amount") as string);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const currentBalance = user?.profile?.Portfolio?.cash || 0;
    
    if (action === "withdraw") {
      if (amount > Number(currentBalance)) {
        alert("Insufficient funds.");
        return;
      }
      await prisma.portfolio.update({
        where: { id: user?.profile.portfolioId },
        data: { cash: Number(currentBalance) - amount },
      });
      alert("Withdrawal successful!");
   } else if (action === "deposit") {
      await prisma.portfolio.update({
        where: { id: user?.profile.portfolioId },
        data: { cash: Number(currentBalance) + amount },
      });
      alert("Deposit successful!");
    }
 }

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
        <Form action ={handleSubmit}>
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
