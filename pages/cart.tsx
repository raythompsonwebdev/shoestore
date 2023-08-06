import Head from 'next/head'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
// import { useState, useEffect } from 'react'
// import { useEffect } from 'react';
// import Basket from '../components/Basket';
// import Image from "next/image";
// import CartContainer from '../features/cart/CartContainer'
// import { useAppDispatch, useAppSelector } from '../hooks/hooks';
// import { calculateTotals, getCartItems} from '../features/cart/cartSlice';

// const myComponentStyle = {
//   width: '98%',
//   height: '1200px',
//   //backgroundColor: 'red',
//   display: 'block',
//   margin: '10px',
// }

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

  // used to stop infinte loops
  // useEffect(()=>{
  // 	setCartItems(products);
  // }, [products])

  // const onAdd = (product: { id: string }) => {
  //   const exist = cartItems.find((x) => x.id === product.id)

  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     )
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }])
  //   }
  // }

  // const onRemove = (product: { id: string }) => {
  //   const exist = cartItems.find((x) => x.id === product.id)
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id))
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     )
  //   }
  // }

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
            {/* <section style={myComponentStyle}> */}

              {/* <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket> */}
            {/* </section> */}
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
            {/* <section style={myComponentStyle}> */}

              {/* <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket> */}
            {/* </section> */}
          </main>
        </>
      </Layout>
    )
  }
}

export default Cart
