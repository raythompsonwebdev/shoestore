import Head from 'next/head'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/store'
import Basket from '../components/Basket'
import { selectAllCartItems } from '../features/cart/cartSlice'

const Cart = () => {
  const { cartItems } = useAppSelector(selectAllCartItems)

  const { data: session, status } = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cookies, setCookies] = useState<any>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = { ...session }

  console.log(cookies)

  useEffect(() => {
    if (status === 'authenticated') {
      try {
        const fetchCookie = async () => {
          const res = await fetch('/api/helpers/cookiegetter')
          const result = await res.json()
          setCookies(result)
          return result
        }

        const addData = async () => {
          const res = await fetch('/api/addcartitems', {
            method: 'POST',
            body: JSON.stringify({ cartItems, user }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          const result = await res.json()
          return result
        }

        fetchCookie()
        addData()
      } catch (err) {
        console.log(err)
      }
    }
  }, [status, cartItems, user])

  if (status === 'authenticated' && session !== null) {
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
            <p>{user ? user.name : 'name not available'}</p>
            <p>{user ? user.email : 'email not available'}</p>
            <Basket cartItems={cartItems}></Basket>
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
            <Basket cartItems={cartItems}></Basket>
          </main>
        </>
      </Layout>
    )
  }
}

export default Cart
