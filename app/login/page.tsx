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
      <div id="loginBody">
        <form
          id="loginForm"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            await handleSubmit(formData);
          }}
        >
          <label id="loginFormTitle">Your Investment Success Is Waiting!</label>
          <label id="loginBox">
            <input name="email" type="email" placeholder="Email" />
          </label>

          <div>
            <label id="loginBox">
              <input name="password" type="password" placeholder="Password" />
            </label>
          </div>
          <button id="accbtn">SIGN IN</button>
          <Link id="accbtn3" href="/signup">
            {" "}
            No Account? Make One Here!{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
