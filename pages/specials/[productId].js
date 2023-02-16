import React, { useState } from "react";
import LikesSection from "../../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { handler } from "../api";

export default function singleSpecialsProduct(props) {
  const [products] = useState(props.productData);
  const [productInfo, setProductInfo] = useState({ likes: 0 });
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find((product) => product.name === productId);

  const { imgUrl, price, size, style, text } = {
    ...product,
  };

  // const product = productData.find((item) => item.name === name);
  // const otherProducts = productData.filter((item) => item.name !== name);

  return product ? (
    <Layout>
      <>
        <Head>
          <title>Single Specials Product</title>
          <meta name="description" content="Single Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Specials Product page</h1>
          <figure id="product-page-box">
            <Image
              id="product-page-img"
              src={imgUrl}
              alt={style}
              width={175}
              height={150}
            />
            <figcaption id="product-page-caption">
              <p className="product-page-title"> {style}</p>
              <p id="product -page-price">£{price}</p>
              <p className="product-page-title">{size}</p>
              <p>{text}</p>

              <LikesSection
                likes={productInfo.likes}
                productName={style}
                setProductInfo={setProductInfo}
              />
            </figcaption>
          </figure>
        </main>
      </>
    </Layout>
  ) : (
    <Layout>
      <>
        <Head>
          <title>Single New Product</title>
          <meta name="description" content="Single Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">New Product Page</h1>
          <figure id="product-page-box">
            <figcaption id="product-page-caption">
              <p className="product-page-title">product not found</p>
            </figcaption>
          </figure>
        </main>
      </>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { productId } = { ...params };
  const productData = await handler(
    `http://localhost:8000/api/product/${productId}`
  );

  return {
    props: {
      productData,
      params,
    },
  };
}

export async function getStaticPaths() {
  const response = await handler(`http://localhost:8000/api/products`);
  // console.log(response);
  const thePaths = response.map((item) => {
    return { params: { productId: item.name } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}
