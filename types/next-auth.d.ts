// import { JWT } from 'next-auth/jwt'
import { User } from './index'

declare module 'next-auth/jwt' {
  interface JWT {
    refreshTokenExpires: number
    accessTokenExpires: number
    refreshToken: string
    token: string
    exp: number
    iat: number
    jti: string
  }
}
declare module 'next-auth' {
  interface Session {
    user: User
  }
}
