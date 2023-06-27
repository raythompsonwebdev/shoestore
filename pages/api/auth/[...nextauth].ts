import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '../../../lib/mongodb'
import { connectToMongoDB } from '../../../lib/dbConnect'
import FindUser from '../../../models/users'
import { IUser } from '../../../types'
import { comparePassword } from '../../../lib/hashPassword'

//import { signJwtAccessToken } from "../../../lib/jwt";

export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: 'credentials',
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        name: { label: 'Username', type: 'text' },
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await connectToMongoDB().catch((err) => {
          throw new Error(err)
        })
        // Add logic here to look up the user from the credentials supplied
        // const res = await fetch("http://localhost:3000/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     username: credentials?.name,
        //     password: credentials?.password,
        //     useremail: credentials?.email,
        //   }),
        // });
        // const user1 = await res.json();

        // console.log(user1)

        // confirm if user email already exists.
        const user = await FindUser.findOne({
          email: credentials?.email,
        }).select('+password')

        if (!user) {
          throw new Error('Invalid credentials')
        }

        // confirm whether password entered matches user password stored in db.
        const isPasswordCorrect = await comparePassword(
          credentials!.password,
          user.password
        )

        if (!isPasswordCorrect) {
          throw new Error('Invalid credentials')
        }

        // const accessToken = signJwtAccessToken(user);



        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  theme: {
    colorScheme: 'light',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  callbacks: {
    jwt: ({token, account, user})=> {
      if (account) {
        token.accessToken = account.access_token;
      }
      return { ...token, ...user };
    },
    session: async ({session, token}) => {
      const pill = token.user as IUser;
      return {
        pill,
        ...session,
        accessToken: token.accessToken,
      };
    }
  },
  pages: {
    signIn: '/login',
  },
}

export default NextAuth(authOptions)
