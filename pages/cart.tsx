import Head from 'next/head'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useState, SetStateAction } from 'react'
import Basket from '../components/Basket';
// import {ProductType } from '../types/index'
// import CartContainer from '../features/cart/CartContainer'
// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { calculateTotals, getCartItems} from '../features/cart/cartSlice';


const Cart = () => {

  // const { cartItems, isLoading } = useAppSelector((store) => store.cart);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [cartItems,dispatch]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // },[dispatch]);

  //const [cartItems, setCartItems] = useState<Array<any>>([])

  const { data: session, status } = useSession()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any[]>([]);

  const onAdd = (product: { prodId: SetStateAction<number> }) => {
    const exist = cartItems.find((x:{prodId:number}) => x.prodId === product.prodId)

    if (exist) {
      setCartItems(
        cartItems.map((x:{prodId:number | string}) =>
          x.prodId === product.prodId ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product: { prodId: SetStateAction<number | string> }) => {
    const exist = cartItems.find((x:{prodId:number}) => x.prodId === product.prodId)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x:{prodId:number}) => x.prodId !== product.prodId))
    } else {
      setCartItems(
        cartItems.map((x:{prodId:number}) =>
          x.prodId === product.prodId ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

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
            <p>{session.user?.name ? session.user?.name : "name not available"}</p>
            <p>{session.user?.email ? session.user?.email  : "email not available"}</p>
            {/* <CartContainer /> */}
              <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
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
            {/* <CartContainer /> */}
              <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket>
          </main>
        </>
      </Layout>
    )
  }
}

export default Cart
