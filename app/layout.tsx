// This is the root layout for the Next.js application
// It defines the overall structure of the HTML document, including the head
// Importing the global CSS files for the application
import "./styles/capstone.css";
import "./styles/styles.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Sim Stock",
  description: "Generated by Next.js",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>SimStock</title>
      </Head>
      <body>
        <div>
          <Link href="/">
            <Image
              className="banner"
              src="/LOGOv1.png"
              alt="Logo"
              width={150}
              height={110}
            />
          </Link>
          <h1>Stock Trading System Simulator</h1>
          <h2>By Team 21</h2>
          <h2>Sam Kline, Michael Lacey, Josien Lajoie</h2>
          <div className="navbar">
            <Link className="login" href="/login">
              Log In
            </Link>
            <Link href="/Profile/schedule">View Schedule</Link>
            <Link href="/market">View Market</Link>
            <div className="dropdown">
              <button className="dropbtn">Account</button>
              <div className="dropdown-content">
                <Link href="/Profile">Profile</Link>
                <Link href="/Profile/portfolio">Portfolio</Link>
                <Link href="/Profile/portfolio/transaction-history">
                  Transaction History
                </Link>
              </div>
            </div>
            <div className="dropdown">
              {/*!-- check if user is administrator to reveal Hidden attributes --*/}
              <button hidden className="dropbtn">
                Edit
              </button>
              <div className="dropdown-content">
                {/* <Link href="/editmarket">Edit Market</Link> */}
                {/* <Link href="/editschedule">Edit Schedule</Link> */}
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
