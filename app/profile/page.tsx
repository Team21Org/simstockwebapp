import Head from "next/head";
import { auth } from "../../auth";
import prisma from "../lib/prisma";

export default async function Profile() {
  const session = await auth();

  let content;

  if (!session?.user?.email) {
    content = (
      <div>
        <h1>You must be logged in to view this page.</h1>
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

    const userName = user?.userName || "N/A";
    const accountNumber = user?.profile?.portfolioId || "N/A";
    const accountBalance = user?.profile?.Portfolio?.cash || 0;

    content = (
      <div id="profileInfo">
        <p>Name: {session?.user.name}</p>
        <p>Username: {userName}</p>
        <p>E-Mail Address: {session?.user.email}</p>
        <p>Account Number: {accountNumber}</p>
        <p>Account Balance: ${accountBalance.toString()}</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Profile</title>
      </Head>
      <h3>Profile</h3>
      {content}
    </>
  );
}
