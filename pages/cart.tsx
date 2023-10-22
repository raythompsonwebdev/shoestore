import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useAppSelector } from '../app/store'
import Basket from '../components/Basket'
import { selectAllCartItems } from '../features/cart/cartSlice'

const Cart = () => {
  const { cartItems } = useAppSelector(selectAllCartItems)

  const { data: session, status } = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [ cookies, setCookies ] = useState<any>(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { user }: any = { ...session }

  //  console.log(cookies)

  useEffect(() => {
    if (status === 'authenticated') {
      try {
        // const fetchCookie = async()=> {
        //   const res = await fetch('/api/helpers/cookiegetter');
        //   const result = await res.json();
        //   setCookies(result)
        //   return result;
        // }

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

        // fetchCookie()
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
            <br />
            <figure id="profile-image">
              {user?.picture === ' ' ? (
                <Image
                  src={'/images/placeholder.jpg'} // not included as database field yet.
                  className="user-image"
                  alt="Profile"
                  width="200"
                  height="200"
                />
              ) : (
                <Image
                  src={user?.picture}
                  className="user-image"
                  alt="Profile"
                  width="200"
                  height="200"
                />
              )}
              <figcaption id="profile-image-text">
                <h3 className="profile-image-text-title">Username</h3>
                <p>{user ? (user.name as string) : 'username not found'}</p>
                <h3 className="profile-image-text-title">Email</h3>
                <p>{user ? (user.email as string) : 'useremail not found'}</p>
                <br />
                <p>
                  <em>Your Signed In.</em>
                </p>
              </figcaption>
            </figure>
            <br />
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
