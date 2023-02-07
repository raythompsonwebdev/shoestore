// import React, { useEffect, useState } from "react";
// import LikesSection from "../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import products from "../api/json-data/Productdata";

// eslint-disable-next-line func-style
export default function singleSearchProduct() {
  // const [productInfo, setProductInfo] = useState({ likes: 0 });

  // const product = productData.find((item) => item.name === name);
  // const otherProducts = productData.filter((item) => item.name !== name);

  // const matchingProduct = singleProduct;

  // const { imgUrl, price, size, style, text } = {
  //   ...singleProduct,
  // };

  const router = useRouter();

  const testValues = Object.values(router.query);

  console.log(testValues);

  const [gender1, color1, style1, size1] = testValues;

  console.log(gender1, color1, style1, size1);

  //const product = products.find((product) => product.size === size1);

  const product = products.filter((product) => product.size === size1);

  console.log(product);

  // const { name , imgUrl, price, size, style, text } = {
  //   ...product,
  // };

  // return matchingProduct ? (
  return (
    <Layout>
      <>
        <Head>
          <title>Single Search Product</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Product page</h1>
          {product.map((shoes) => (
            <figure id="product-page-box">
              <Image
                id="product-page-img"
                src={shoes.imgUrl}
                alt={"test"}
                width={174}
                height={140}
              />
              <figcaption id="product-page-caption">
                <p id="product-page-title"> {shoes.name}</p>
                <p id="product -page-price">£{shoes.price}</p>
                <p id="productPagegender">{shoes.gender}</p>
                <p>{""}</p>

                {/* <LikesSection
            likes={productInfo.likes}
            productName={style}
            setProductInfo={setProductInfo}
          /> */}
              </figcaption>
            </figure>
          ))}
          <h1 id="main-content-title">Other Products</h1>

          {/* <div className="other-products">
        {otherProducts.map((item) => (
          <figure className="other-products-box" key={item.id}>
            <img
              className="other-product-box-img"
              src={item.imgUrl}
              alt={item.name}
            />
            <figcaption className="other-product-box-caption">
              <p className="other-product-box-title"> {item.name}</p>
              <p className="other-product-box-price">£{item.price}</p>
              <Link to={`/product/${item.name}`}>
                <img
                  className="other-product-cart-icon"
                  src={item.cartImg}
                  alt="shopping cart icon"
                />
              </Link>
            </figcaption>
          </figure>
        ))}
      </div> */}
        </main>
      </>
    </Layout>
  );
  // ) : (
  //   <NotFound />
  // );
}

// singleSearchProduct.getInitialProps = ({ query }) => {
//   //console.log(query);
//   return {
//     props: query,
//   };
// };
