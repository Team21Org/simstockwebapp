"use client";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";


export default function Logout() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const hasRedirected = useRef(false); // Ref to track if redirection has occurred

    useEffect(() => {
      if (status === "loading") return; // Wait until loading is done
  
      if (!session?.user?.email && !hasRedirected.current) {
        hasRedirected.current = true;
        alert("You are not logged in.");
        router.push("/login");
      }
    }, [session, status, router]);
    
  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" }); // Redirect to login page after signing out
    alert("You have been logged out.");
  };
  
  let content;

  if (status === "loading") {
    content = <p>Checking login status...</p>;
  } else if (!session?.user?.email) {
    // Return nothing here, since useEffect will handle redirect
    content = null;
  } else {
    content = (
      <>

        <p>Are you sure you would like to sign out?</p>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Sign Out
        </button>
      </>
    );
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Logout</title>
      </Head>
      <h3>Logout</h3>
      {content}
    </div>
  );
}