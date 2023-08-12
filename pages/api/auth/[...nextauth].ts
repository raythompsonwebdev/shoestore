import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import { connectToMongoDB } from '../../../lib/dbConnect'
import FindUser from '../../../models/users'
import { comparePassword } from '../../../lib/hashPassword'

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      name: 'credentials',

      // email:'credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        name: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectToMongoDB().catch((err) => {
          throw new Error(err)
        })

        // confirm if user email already exists.
        const user = await FindUser.findOne({
          email: credentials?.email,
        }).select('+password')

        if (!user) {
          throw new Error('Invalid credentials')
        }

        // confirm whether password entered matches user password stored in db.
        if (credentials?.password !== undefined) {
          const isPasswordCorrect = await comparePassword(
            credentials.password,
            user.password
          )
          // if (isPasswordCorrect) {
          //   const accessToken = signJwtAccessToken(
          //     {
          //       user: {
          //         name: user.name,
          //         email: user.email,
          //       },
          //     }
          //   );
          //   user.accessToken = accessToken;
          // } else {
          //   throw new Error("Password is not valid");
          // }

          if (!isPasswordCorrect) {
            throw new Error('Invalid credentials')
          }
        }
        // check if user password and email sumitted match user email and passowrd saved in database.
        //if (user.email === credentials?.email && isPasswordCorrect) {
        if (user.email === credentials?.email) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.SECRET_KEY,
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 14,
  },

  callbacks: {
    jwt: async ({ token, account, user }) => {
      if (account) {
        token.accessToken = account.access_token
      }
      return { ...token, ...user }
    },
    session: async ({ session, token }) => {
      session.user = token
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
