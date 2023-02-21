import { useState } from "react";
import LikesSection from "../../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { handler } from "../api";

export default function searchProduct(props) {
  const [products] = useState(props.productData);
  const [productInfo, setProductInfo] = useState({ likes: 0 });

  const router = useRouter();

  const testValues = Object.values(router.query);

  const [gender1, color1, style1, size1] = testValues;

  console.log(gender1, color1, style1, size1);

  const product = products.filter((product) => product.size === size1);

  return product ? (
    <Layout>
      <>
        <Head>
          <title>Products</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Search Products page</h1>
          {product.map((shoes) => (
            <figure id="product-page-box" key={shoes.prodId}>
              <Image
                id="product-page-img"
                src={shoes.imgUrl}
                alt={"test"}
                width={175}
                height={150}
              />
              <figcaption id="product-page-caption">
                <p className="product-page-title"> {shoes.name}</p>
                <p id="product -page-price">£{shoes.price}</p>
                <p className="product-page-title">{shoes.gender}</p>
                <p className="product-page-title">{shoes.size}</p>
                <p className="product-page-title">{shoes.color}</p>
                <p>{""}</p>

                <LikesSection
                  likes={productInfo.likes}
                  // productName={style}
                  setProductInfo={setProductInfo}
                />
              </figcaption>
            </figure>
          ))}
        </main>
      </>
    </Layout>
  ) : (
    <Layout>
      <>
        <Head>
          <title>Single Search Product</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Search Products page</h1>
          {product.map((shoes) => (
            <figure id="product-page-box" key={shoes.prodId}>
              <figcaption id="product-page-caption">
                <p className="product-page-title">No Products Found</p>
              </figcaption>
            </figure>
          ))}
        </main>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const productData = await handler("http://localhost:8000/api/products");

  return {
    props: {
      productData,
    },
  };
}
