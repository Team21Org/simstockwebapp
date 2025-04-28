import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  const session = await auth();
  if (!session?.user?.email) {
    redirect("/login");
  }

  // Get the previous page from query params, fallback to "/"
  const from = "/";

  // Use a GET link for logout

  const logoutUrl = `/api/auth/signout?callbackUrl=/login`;
  return (
    <div>
      <h3>Sign Out</h3>
      <h1>Please choose an option below: </h1>
      <a href={logoutUrl} id="signoutBtn" style={{ textDecoration: "none" }}>
        Proceed To Sign Out
      </a>{" "}
      <br />
      <a href={from} id="cancelBtn" style={{ textDecoration: "none" }}>
        Cancel
      </a>
    </div>
  );
}
