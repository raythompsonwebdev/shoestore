import { SessionProvider } from 'next-auth/react'
import '../styles/sass/style.scss'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { store } from "../app/store";
import { Provider } from "react-redux";


const MyApp =({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
