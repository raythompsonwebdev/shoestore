import { useState } from "react";
import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import LikesSection from "../../components/LikesSection";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: any) => {
  try {
    //await clientPromise
    const productName = context.query.prodname;
    const client = await clientPromise;

    const db = client.db("shoestore");
    const results = await db
      .collection("products")
      .findOne({ name: productName });

    const product = JSON.parse(JSON.stringify(results));

    return {
      props: {
        product,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function SingleProduct({
  product,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [singleProduct] = useState(product);

  const [productInfo, setProductInfo] = useState({ likes: 0 });

  const router = useRouter();

  const { prodname } = router.query;

  const { _id, color, imgUrl, name, price, size, style, text }: any = {
    ...singleProduct,
  };

  return singleProduct ? (
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

              {/* <button onClick={() => onAdd(product)}>Add To Cart</button> */}
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
