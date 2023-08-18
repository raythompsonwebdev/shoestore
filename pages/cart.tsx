import Head from 'next/head'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useAppSelector} from '../app/store'
import Basket from '../components/Basket'
import {selectAllCartItems} from '../features/cart/cartSlice';


const Cart = () => {

  const { cartItems } = useAppSelector(selectAllCartItems)

  const { data: session, status } = useSession()

  if (status === 'authenticated') {
    return (
      <Layout>
        <>
          <Head>
            <title>Cart</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="main-content" className="clearfix">
            <h1 id="main-content-title">Cart - Logged In</h1>
            <p>
              {session.user?.name ? session.user?.name : 'name not available'}
            </p>
            <p>
              {session.user?.email
                ? session.user?.email
                : 'email not available'}
            </p>
            <Basket
              cartItems={cartItems}
            ></Basket>
          </main>
        </>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <>
          <Head>
            <title>Cart</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="main-content" className="clearfix">
            <h1 id="main-content-title">Cart - Not Logged In</h1>
            <Basket
              cartItems={cartItems}
            ></Basket>
          </main>
        </>
      </Layout>
    )
  }
}

export default Cart

