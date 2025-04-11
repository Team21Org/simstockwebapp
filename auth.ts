import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./app/lib/prisma"

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
    },
    authorize: async (credentials) => {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Email and password are required.");
      }

      const user = await prisma.user.findUnique({
        where: {
          email: credentials?.email as string,
          }
        })
        if (!user) {
          throw new Error("Invalid credentials.")
        }
      
        // Compare the provided password with the hashed password
        const isPassword = await(credentials.password, user.password);
      
        if (!isPassword) {
          throw new Error("Invalid credentials.");
        }

      return user
    },
  }),
  ],
})