import { SessionProvider } from 'next-auth/react'
import '../styles/sass/style.scss'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
