// import { getCookie, getCookies } from 'cookies-next'
import { getCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getApiCookie(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const currentCookie = getCookie('__Secure-next-auth.session-token', { req, res })
    //const allCookies = getCookies({ req, res })
    // console.log('currentCookie: ', currentCookie)
    // console.log('allCookies: ', allCookies)
    res.status(200).json({currentCookie})

  } catch (err) {
    res.status(400).send({message: "error"})
  }
}
