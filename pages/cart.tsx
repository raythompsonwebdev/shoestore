import Head from 'next/head'
import Layout from '../components/Layout'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
//import Basket from '../components/Basket';
// import Image from "next/image";

const myComponentStyle = {
  width: '98%',
  height: '1200px',
  backgroundColor: 'red',
  display: 'block',
  margin: '10px',
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  //const cookies = context.req.cookies;
  //console.log( cookies)

  try {
    //await clientPromise
    const client = await clientPromise
    const db = client.db('shoestore')
    const results = await db.collection('products').find({}).toArray()
    const products = JSON.parse(JSON.stringify(results))

    return {
      props: {
        products,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Cart(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { products } = props

  // console.log(products)

  const [cartItems, setCartItems] = useState<Array<any>>([])
  const { data: session, status } = useSession()

  // used to stop infinte loops
  // useEffect(()=>{
  // 	setCartItems(products);
  // }, [products])

  const onAdd = (product: { id: string }) => {
    const exist = cartItems.find((x) => x.id === product.id)

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const onRemove = (product: { id: string }) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
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
            <p>{session.user?.name}</p>
            <p>{session.user?.email}</p>
            <section style={myComponentStyle}>
              {/* <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket> */}
            </section>
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
            <section style={myComponentStyle}></section>
          </main>
        </>
      </Layout>
    )
  }
}
