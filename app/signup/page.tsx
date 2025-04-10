// src/app/signup/page.js
//This is the user registration portal
import prisma from "../lib/prisma";
import Head from "next/head";
import Form from "next/form";

export default async function SignUp() {
  async function createUser(formData: FormData) {
    "use server";

    const email = formData.get("E-Mail address") as string;
    const password = formData.get("Password") as string;
    const name = formData.get("Full Name") as string;
    const user = formData.get("Username") as string;
  }

  const users = await prisma.user.findMany();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Stock Sim | Sign-Up</title>
      </Head>
      <h3>Sign-Up</h3>
      <h1 className="text-2xl font-bold mb-4">Sign Up Now!</h1> <br />
      <Form action={createUser}>
        <div>
          <label htmlFor="E-Mail Address">E-Mail Address</label>
          <input
            type="email"
            name="E-Mail address"
            id="E-Mail Address"
            required
          />
          <label htmlFor="Password">Password</label>
          <input type="password" name="Password" id="Password" required />
          <label htmlFor="Full Name">Full Name</label>
          <input type="text" name="Full Name" id="Full Name" required />
          <label htmlFor="Username">Username</label>
          <input type="text" name="Username" id="Username" required />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Item
          </button>
        </div>
      </Form>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.email} - {user.fullName} - {user.userName}
          </li>
        ))}
      </ol>
    </>
  );
}
