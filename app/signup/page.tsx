"use client";
// src/app/signup/page.js
//This is the user registration portal
import prisma from "@/lib/prisma";

import { useState, useEffect } from "react";
import Head from "next/head";
import "@/app/api/route"; // Import the middleware to use the GET function
// import Image from "next/image";
// import Link from "next/link";

interface User {
  id: string;
  email: string;
  fullName: string;
  userName: string;
}

export default function SignUp() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(model: string) {
      try {
        const response = await fetch(`/api/${model}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data for model: ${model}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData("user"); // Fetch data for the "user" model
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Sign-Up</title>
      </Head>
      <div className="w-full max-w-md">
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ol>
            {users.map((user) => (
              <li key={user.id} className="mb-2">
                {user.email} - {user.fullName} - {user.userName}
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
