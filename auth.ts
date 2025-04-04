import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
    },
    authorize: async (credentials) => {
      let user = null
      user = await prisma.user.findUnique({
        where: {
          email: credentials?.email,
          }
        })
        if (!user) {
          throw new Error("Invalid credentials.")
        }
      return user
    },
  }),
  ],
})
