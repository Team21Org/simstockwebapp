import Head from "next/head";
// import Image from 'next/image';
// import Link from "next/link";
import prisma from "../lib/prisma";
import Form from "next/form";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Profile() {
  async function fetchUserProfile() {
    "use server";
    // Fetch user profile data from the database
    const user = await prisma.user.findFirst();
    return user;
  }

  const userProfile = await fetchUserProfile();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Profile</title>
      </Head>
      <div>
        <div></div>
        <h3>Profile</h3>
        <p>Name: </p>
        <p>Username: </p>
        <p>E-Mail Address:</p>
        <p>Account Number: </p>
        <p>Account Balance: </p>
        {/* <!--javascript to pull user information from the database. Organize into table, maybe --> */}
      </div>
    </>
  );
}
