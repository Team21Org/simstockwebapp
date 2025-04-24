import Head from "next/head";
// import Image from 'next/image';
// import Link from "next/link";
import { auth } from "../../auth";
import prisma from "../lib/prisma";

export default async function Profile() {
  // Get the session
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  // Query the database using the session email
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      profile: {
        include: {
          Portfolio: true, // Include Portfolio to get account details
        },
      },
    },
  });

  // Extract user details
  const userName = user?.userName || "N/A";
  const accountNumber = user?.profile?.portfolioId || "N/A";
  const accountBalance = user?.profile?.Portfolio?.cash || 0;

  return (
    <>
      <Head>
        <title>Stock Sim | Profile</title>
      </Head>
      <div>
        <h3>Profile</h3>
        <p>Name: {session?.user.name}</p>
        <p>Username: {userName}</p>
        <p>E-Mail Address: {session?.user.email}</p>
        <p>Account Number: {accountNumber}</p>
        <p>Account Balance: ${accountBalance.toFixed(2)}</p>
      </div>
    </>
  );
}
