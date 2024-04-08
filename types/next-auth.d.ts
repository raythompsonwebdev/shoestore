import 'next-auth'
import { User } from './index'

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
// import * as React from 'react'
declare module 'next-auth' {
  interface Session {
    user: User
  }
  /**
   * The shape of the account object returned in the OAuth providers' `account` callback,
   * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
   */
  interface Account {}

  /**
   * Returned by `useSession`, `auth`, contains information about the active session.
   */
  interface Session {}
}

declare module 'next-auth/jwt' {
  interface JWT {
    refreshTokenExpires?: number
    accessTokenExpires?: number
    refreshToken?: string
    token: string
    exp?: number
    iat?: number
    jti?: string
  }
}
