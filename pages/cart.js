//import React from 'react';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import Head from "next/head";
import Layout from "../components/Layout";
// import { useState } from 'react';
// import Basket from './components/Basket';
// import Image from "next/image";

const myComponentStyle = {
  width: "600px",
  height: "600px",
  backgroundColor: "red",
  display: "block",
  margin: "50px",
};

// const { products } = data;
// const [cartItems, setCartItems] = useState([]);
// const onAdd = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist) {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   }
// };
// const onRemove = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   } else {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };

export default function Cart() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <Layout>
        <>
          <Head>
            <title>Cart</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="main-content" className="clearfix">
            <h1 id="main-content-title">Cart - logged in</h1>
            <section style={myComponentStyle}></section>
            {/* <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            ></Basket> */}
          </main>
        </>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <>
          <Head>
            <title>Cart</title>
            <meta name="description" content="Contact us page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main id="content" className="clearfix">
            <h1>Cart - not logged in</h1>
            <section style={myComponentStyle}></section>
          </main>
        </>
      </Layout>
    );
  }
}

export const getServerSideProps = withPageAuthRequired();
