import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignOption {
  expiresIn?: string | number
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: '1h',
}

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.NEXTAUTH_SECRET
  const token = jwt.sign(payload, secret_key, options)

  return token
}

export async function verifyJwt(token: string) {
  const secret_key = process.env.NEXTAUTH_SECRET

  try {
    const decoded = jwt.verify(token, secret_key)
    console.log(decoded)
    return decoded as JwtPayload
  } catch (error) {
    console.error(error)
    return null
  }
}
