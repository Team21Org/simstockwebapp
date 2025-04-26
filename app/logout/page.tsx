import { Logout } from "../lib/actions";

export default async function LogoutPage() {
  // Get the previous page from query params, fallback to "/"
  const from = "/";

  // Use a GET link for logout
  const logoutUrl = `/api/auth/signout?callbackUrl=/login`;
  return (
    <html>
      <div>
        <h1>Log Out</h1>
        <p>Are you sure you want to log out?</p>
        <a
          href={logoutUrl}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          style={{ textDecoration: "none" }}
        >
          Log Out
        </a>
        <a
          href={from}
          className="bg-gray-300 text-black px-4 py-2 rounded ml-2"
          style={{ textDecoration: "none" }}
        >
          Cancel
        </a>
      </div>
    </html>
  );
}
