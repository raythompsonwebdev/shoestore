// This is an example of to protect an API route
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
// import {signJwtAccessToken, verifyJwt} from "../../../lib/jwt"

// function generateAccessToken(user:any) {
//   return jwt.sign(user, process.env.NEXTAUTH_SECRET, { expiresIn: '1800s' });
// }


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  const secret = process.env.NEXTAUTH_SECRET

  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req, secret });

  //const token = signJwtAccessToken({ user: req.body.user });
  //const cookies = req.cookies;


  if (session) {
    return res.send({
      content: session,
      accessToken:token,
      ///cookies,
    });
  }

  res.send({
    error: "You must be signed in to view the protected content on this page.",
  });
}
