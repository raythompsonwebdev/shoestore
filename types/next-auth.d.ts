import { JWT } from "next-auth/jwt";
import { User } from "./index";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
import * as React from 'react'

declare module 'next-auth/jwt' {
  interface JWT {
    refreshTokenExpires?: number;
    accessTokenExpires?: number;
    refreshToken?: string;
    token: string;
    exp?: number;
    iat?: number;
    jti?: string;
  }
}
declare module "next-auth" {
  interface Session {
    user: User,
  }
}
