import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'


export default function signInBox() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <span id="signin-box">
      {loading ? <>Loading...</> : false}

      {!session && (
        <>
          <Link
            href={`/api/auth/signin`}
            className="signin-box-link"
            title=""
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Login
          </Link>
          <Link
            href="/profile"
            className="signin-box-link"
            title=""
          >
            Account
          </Link>
          <Link href="/cart" className="signin-box-link" title="">
            Cart
          </Link>
        </>
      )}
      {session?.user && (
        <>
          <Link
            href={`/api/auth/signout`}
            className="signin-box-link"
            title=""
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            Log Out
          </Link>
          <Link
            href="/profile"
            className="signin-box-link"
            title=""
          >
            Account
          </Link>
          <Link href="/cart" className="signin-box-link" title="">
            Cart
          </Link>
        </>
      )}
    </span>
  )
}
