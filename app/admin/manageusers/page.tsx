import Head from "next/head";
import { auth } from "../../../auth";
import prisma from "../../lib/prisma";

export default async function ManageUsers() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <div>
        <h3>Access Denied</h3>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { role: true },
  });

  if (!user || user.role !== "ADMIN") {
    return (
      <div>
        <h3>Access Denied</h3>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Stock Sim | Admin | Manage Users</title>
      </Head>
      <div>
        <h3>Manage Users</h3>
        <p>There is currenty no data to display.</p>
      </div>
    </>
  );
}
