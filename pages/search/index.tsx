import { useState } from "react";
import LikesSection from "../../components/LikesSection";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("shoestore");
    const results = await db.collection("products").find({}).toArray();

    if (results.length > 0) {
      console.log(`${results.length} customers found`);
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`);
    }

    const productsearch = JSON.parse(JSON.stringify(results));

    return {
      props: { productsearch },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function SearchProduct({
  productsearch,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [products] = useState(productsearch);
  const [productInfo, setProductInfo] = useState({ likes: 0 });

  const router = useRouter();

  // deconstruct query object
  const { resultArray } = router.query;

  // deconstruct search result array with product details
  const [gender1, style1, size1, color1]: any = resultArray;

  // filter product from the products array
  const product = products.filter(
    (product: any) =>
      product.size === size1 &&
      product.color === color1 &&
      product.gender === gender1 &&
      product.style === style1
  );

  console.log(product);

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
          {product.map((shoes: any) => (
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
                  productName={shoes.name}
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
          {product.map((shoes: any) => (
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
