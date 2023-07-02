import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "./index";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
import * as React from 'react'

declare module 'next-auth/jwt' {
  interface JWT {
    id_token?: string
    userRole?: "admin";
  }
}
declare module "next-auth" {
  interface Session {
    user: User,
  }
}
