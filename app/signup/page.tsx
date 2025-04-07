"use client";
// src/app/signup/page.js
//This is the user registration portal
import prisma from "@/lib/prisma";
import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

export default async function SignUp() {
  const users = await prisma.user.findMany();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Sign-Up</title>
      </Head>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up Now!</h1>
        <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.email} - {user.fullName} - {user.userName}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
