import Head from "next/head";
import Link from "next/link";
import { auth } from "../../auth";
import prisma from "../lib/prisma";

export default async function Profile() {
  const session = await auth();

  let content;

  if (!session?.user?.email) {
    content = (
      <div>
        <h1>You must be logged in to view your Profile.</h1>
        <p id="redirectTxt">Please select either option below:</p>
        <Link id="loginRedirect" href="/login">Click Here To Login!</Link> 
        <Link id="signupRedirect" href="/signup">Make An Account!</Link>
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
    const accountBalance = user?.profile?.Portfolio?.cash || 0;

    content = (
      <div id="profileInfo">
        <label> Name: <p>{session?.user.name}</p></label> 
        <label>Username: <p>{userName}</p></label>
        <label>E-Mail Address: <p>{session?.user.email}</p></label>
        <label>Account Balance: <p>${accountBalance.toString()}</p></label>
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
