import { getToken } from 'next-auth/jwt'
import { NextApiRequest, NextApiResponse } from 'next'

//const secret = process.env.NEXTAUTH_SECRET

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // use option raw set to true to get accessToken string,
  const token = await getToken({ req, raw: true })

  if (token) {
    // Signed in
    console.log('JSON Web Token API', JSON.stringify(token, null, 2))
    res.status(200).send({ token })
  } else {
    // Not Signed in
    res.status(401).send({ message: 'token invalid' })
  }
  res.end()
}
