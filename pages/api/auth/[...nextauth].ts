import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import { connectToMongoose } from '../../../lib/dbConnect'
// import {IUser} from '../../../types/index'
import User from '../../../models/users'
import { comparePassword } from '../../../lib/hashPassword'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        name: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await connectToMongoose().catch((err) => {
          throw new Error(err)
        })

        console.log(req)

        // confirm if user email already exists.
        const user = await User.findOne({
          email: credentials?.email,
        }).select('+password')

        if (!user) {
          throw new Error('Invalid credentials! Please enter valid credentials')
        }

        if (user.email !== credentials?.email) {
          throw new Error('Invalid email! Please enter valid email')
        }

        // confirm whether password entered matches user password stored in db.
        if (credentials?.password !== undefined) {
          const isPasswordCorrect = await comparePassword(
            credentials.password,
            user.password
          )

          if (!isPasswordCorrect) {
            throw new Error('Invalid password Please enter valid password')
          }
        }

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account) {
        token.accessToken = account.access_token
      }
      return { ...token, ...user }
    },
    session: async ({ session, token }) => {
      session.user = token
      session.user.id = token.id
      return {
        ...session,
      }
    },
  },
  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions)
