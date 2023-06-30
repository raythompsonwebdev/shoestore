import NextAuth from "next-auth";
import { User } from "./intefaces";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
import * as React from 'react'

declare module 'next-auth/jwt' {
  interface JWT {
    id_token?: string
    provider?: string
    accessToken?: string
  }
}
declare module "next-auth" {
  interface Session {
    user: User,
  }
}
