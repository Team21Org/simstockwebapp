import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        // Retrieve AUTH_SECRET from environment variables
        const authSecret = process.env.AUTH_SECRET;
        if (!authSecret) {
          throw new Error("AUTH_SECRET is not defined in the environment variables.");
        }

        // Query the user from the database
        const user = await prisma.user.findFirst({
          where: { email },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        // Verify the password
        const isPasswordValid = bcrypt.compareSync(password + authSecret, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid email or password.");
        }

        // Return the user object (excluding sensitive fields)
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          userName: user.userName,
          role: user.role,
        };
      },
    }),
  ],
});