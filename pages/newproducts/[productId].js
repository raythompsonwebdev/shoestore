import { useState } from "react";
import LikesSection from "../../components/LikesSection";
// import NotFound from "./NotFound";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { handler } from "../api";

export default function singleNewProduct(props) {
  const [productInfo, setProductInfo] = useState({ likes: 0 });
  const [products] = useState(props.productData);
  const router = useRouter();
  const { productId } = router.query;
  const product = products.find((product) => product.name === productId);
  const { imgUrl, price, size, style, text } = {
    ...product,
  };
  // const otherProducts = products.filter((item) => item.name !== name);

  return product ? (
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

export async function getServerSideProps() {
  const productData = await handler("http://localhost:8000/api/products");

  return {
    props: {
      productData,
    },
  };
}
