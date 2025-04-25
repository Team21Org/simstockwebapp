import Head from "next/head";
import { auth } from "../../../auth";
import prisma from "../../lib/prisma";
import { redirect } from "next/navigation";

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

  // Fetch users from the database
  const fetchedUsers = await prisma.user.findMany();

  async function roleChange(formData: FormData) {
    "use server";
    const userId = formData.get("userId") as string;
    const newRole = formData.get("roles") as string;

    if (newRole !== "ADMIN" && newRole !== "USER") {
      throw new Error("Invalid role value");
    }

    await prisma.user.update({
      where: { id: userId },
      data: { role: newRole },
    });
    redirect("/admin/manageusers");
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
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {fetchedUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.userName}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <form action={roleChange}>
                    <select name="roles" defaultValue={user.role}>
                      <option value="ADMIN">ADMIN</option>
                      <option value="USER">USER</option>
                    </select>
                    <input type="hidden" name="userId" value={user.id} />
                    <button type="submit">Change Role</button>
                  </form>
                </td>
                <td>{user.createdAt.toString()}</td>
                <td>{user.updatedAt.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
