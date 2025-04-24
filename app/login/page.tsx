"use client";

// import Image from "next/image"
import Head from "next/head";
import Link from "next/link";
import { signIn } from "next-auth/react";
// import { User } from "../../auth.config";

export default function Login() {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      alert("Login successful!");
      window.location.href = "/profile"; 
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Login</title>
      </Head>
      <h3>Login</h3>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          await handleSubmit(formData);
        }}
      >
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      <Link id="accbtn" href="/signup">
          {" "}
          No Account? Make One Here!{" "}
        </Link>
      </form>
    </div>
  );
}
