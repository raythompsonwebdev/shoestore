import { useState } from "react";
import LikesSection from "../../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { handler } from "../api";

export default function SingleProduct(props) {
  const [product] = useState(props.productData);

  const [productInfo, setProductInfo] = useState({ likes: 0 });

  const router = useRouter();

  const { prodname } = router.query;

  const { _id, color, imgUrl, name, price, size, style, text } = {
    ...product,
  };

  return product ? (
    <Layout>
      <>
        <Head>
          <title>Single Product</title>
          <meta name="description" content="Single Product" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Product Page</h1>
          <figure id="product-page-box">
            <Image
              id="product-page-img"
              src={imgUrl}
              alt={style}
              width={175}
              height={150}
            />
            <figcaption id="product-page-caption">
              <p className="product-page-title"> {name}</p>
              <p id="product-page-price">£{price}</p>
              <p className="product-page-title">Size : {size}</p>
              <p className="product-page-title">Color : {color}</p>
              <p>{text}</p>

              <LikesSection
                likes={productInfo.likes}
                productName={prodname}
                setProductInfo={setProductInfo}
                prodid={_id}
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

export async function getStaticPaths() {
  const response = await handler(`http://localhost:8000/api/products`);

  const thePaths = response.map((item) => {
    return {
      params: {
        prodname: item.name.toString(),
      },
    };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { prodname } = { ...params };
  const productData = await handler(
    `http://localhost:8000/api/product/${prodname}`
  );

  return {
    props: {
      productData,
      params,
    },
  };
}
