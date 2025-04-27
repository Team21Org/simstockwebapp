// src/app/signup/page.tsx
// This is the user registration portal
import prisma from "../lib/prisma";
import Link from "next/link";
import { User } from "@prisma/client";

export default async function SignUp() {
  // Fetch users from the database
  const users = await prisma.user.findMany();

  return (
    <>
      <h3>Sign Up</h3>

      <form id="signupForm" action="/api/signup" method="POST">
        <div id="signupContainer">
          <div id="loginFormTitle"> Start Your SimStock Journey Today! </div>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter E-mail"
          />
          <input
            type="email"
            name="confirmEmail"
            id="confirmEmail"
            required
            placeholder="Confirm E-Mail Address"
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter Password"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            placeholder="Confirm Password"
          />
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter Full Name"
          />
          <input
            type="text"
            name="userName"
            id="userName"
            required
            placeholder="Enter Username"
          />
          <button type="submit" id="accbtn4">
            {" "}
            SUBMIT{" "}
          </button>
          <Link id="accbtn2" href="/login">
            {" "}
            Already Have An Account? Click Here!{" "}
          </Link>
        </div>
      </form>

      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user: User) => (
          <li key={user.id} className="mb-2">
            {user.email} - {user.name} - {user.userName}
          </li>
        ))}
      </ol>
    </>
  );
}
