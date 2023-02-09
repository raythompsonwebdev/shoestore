// import React, { useEffect, useState } from "react";
// import LikesSection from "../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import products from "../api/json-data/Productdata-copy";

// eslint-disable-next-line func-style
export default function singleSpecialsProduct(props) {
  // const { name } = useParams();
  console.log(props);
  // const [singleProduct, setSingleProduct] = useState({});

  // const [productInfo, setProductInfo] = useState({ likes: 0 });

  // useEffect(() => {
  //   // eslint-disable-next-line func-style
  //   const fetchData = async () => {
  //     const result = await fetch(`/api/product/${name}`);
  //     const body = await result.json();

  //     setSingleProduct(body);
  //     setProductInfo(body);
  //   };

  //   fetchData();
  // }, [name]);

  // const product = productData.find((item) => item.name === name);
  // const otherProducts = productData.filter((item) => item.name !== name);

  // const matchingProduct = singleProduct;

  // const { imgUrl, price, size, style, text } = {
  //   ...singleProduct,
  // };

  const router = useRouter();
  const { productId } = router.query;
  const product = products.find((product) => product.name === productId);

  const { imgUrl, price, size, style, text } = {
    ...product,
  };

  // return matchingProduct ? (
  return (
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
              width={174}
              height={140}
            />
            <figcaption id="product-page-caption">
              <p className="product-page-title"> {style}</p>
              <p id="product -page-price">£{price}</p>
              <p className="product-page-title">{size}</p>
              <p>{text}</p>

              {/* <LikesSection
            likes={productInfo.likes}
            productName={style}
            setProductInfo={setProductInfo}
          /> */}
            </figcaption>
          </figure>

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
