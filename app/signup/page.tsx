// src/app/signup/page.tsx
// This is the user registration portal
import prisma from "../lib/prisma";

export default async function SignUp() {
  // Fetch users from the database
  const users = await prisma.user.findMany();

  // Placeholder for error handling (implement as needed)
  const error = null;

  return (
    <>
      <h3>Sign-Up</h3>
      <h1 className="text-2xl font-bold mb-4">Sign Up Now!</h1> <br />
      {error && (
        <div className="text-red-500 mb-4">
          <p>{error}</p>
        </div>
      )}
      <form action="/api/signup" method="POST">
        <div>
          <label htmlFor="email">E-Mail Address</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="confirmEmail">Confirm E-Mail Address</label>
          <input type="email" name="confirmEmail" id="confirmEmail" required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="fullName" required />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user: User) => (
          <li key={user.id} className="mb-2">
            {user.email} - {user.name} - {user.userName}
          </li>
        ))}
      </ol>
    </>
  );
}
