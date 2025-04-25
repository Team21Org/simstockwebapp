import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function Logout({
  searchParams,
}: {
  searchParams?: { from?: string };
}) {
  const session = await auth();

  // If not logged in, redirect to login page
  if (!session?.user?.email) {
    redirect("/login");
  }
}
