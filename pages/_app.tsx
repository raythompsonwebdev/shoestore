import { SessionProvider } from 'next-auth/react'
import '../styles/sass/style.scss'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import { store } from '../features/store'
import { Provider } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'

store.dispatch(fetchProducts())

const MyApp = ({
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
