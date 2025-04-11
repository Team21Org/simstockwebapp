// import Image from "next/image"
import Head from "next/head";
// import Link from "next/link";
// import { signIn } from "next-auth/react";

export default function Login() {
  // const handleSubmit = async (formData: FormData) => {
  //   const email = formData.get("email") as string;
  //   const password = formData.get("password") as string;

  //   const result = await signIn("credentials", {
  //     redirect: false,
  //     email,
  //     password,
  //   });

  //   if (result?.error) {
  //     alert("Invalid credentials");
  //   } else {
  //     alert("Login successful!");
  //     // Redirect to another page if needed
  //     window.location.href = "/dashboard"; // Example redirect
  //   }
  // };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Login</title>
      </Head>
      <h3>Login</h3>

      {/* <form id="loginform"> */}
      {/* <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          await handleSubmit(formData);
        }}
      >
        <label>
          Username
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form> */}
      {/* <Link id="accbtn" href="/signup">
          {" "}
          No Account? Make One Here!{" "}
        </Link>
      </form> */}
      {/* <!-- this needs to have JavaScript code to verify login information with the database, and then to redirect to likely profile.html --> */}
    </div>
  );
}
