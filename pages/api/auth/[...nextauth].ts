import NextAuth, { AuthOptions } from 'next-auth'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),

    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credientials) {
        if (!credientials?.email || !credientials?.password) {
          throw new Error('Invalid credentials.')
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credientials.email,
          },
        })

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid credentials.')
        }

        const isCorrectPassword = await bcrypt.compare(
          credientials.password,
          user.hashedPassword,
        )

        if (!isCorrectPassword) {
          throw new Error('The password dosent match')
        }

        return user
      },
    }),
  ],

  pages: {
    signIn: '/',
  },

  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
