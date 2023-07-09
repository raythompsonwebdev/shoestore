import { useState } from 'react'
import type { InferGetServerSidePropsType } from 'next'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import clientPromise from '../../lib/mongodb'
import sanitize from 'mongo-sanitize'

type SingleProduct = {
  product:[]
}

type Product = {
  _id?:string;
  style: string;
  price: string;
  size :string;
  color: string;
  text:string;
  likes:number;
  imgUrl:string;
  name?:string
}

export default function SingleProduct(props: InferGetServerSidePropsType<typeof getServerSideProps> ) {

  const {singleProduct} = props;
  //const [productItem] = singleProduct;

  const { _id, color, imgUrl, likes, name, price, size, style, text } = singleProduct as Product

  const [productInfo, setProductInfo] = useState({ likes: likes })

  const router = useRouter()

  const { prodname } = router.query

  return name === prodname ? (

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
  )
}

export const getServerSideProps = async (context:{params:{prodname:string}}) => {

 const {params} = context

 const productName = sanitize(params?.prodname);

  // Call an external API endpoint to get posts
  try {

    const client = await clientPromise;

    const db = client.db("shoestore");

    const results = await db
      .collection("products")
      .findOne({ name: productName });

    const singleProduct = JSON.parse(JSON.stringify(results));

    return {
      props:  {
        singleProduct,
        revalidate: 10,
      }
    }

  } catch (e) {
    console.error(e)

  }

  //const res = await fetch('/api/homepagedata/', { cache: 'no-store' })
  //const result = await res.json()


  //const { product } = {...result} as SingleProduct

  //const singleProduct = product.filter((prod:{name:string})=> prod.name === productName)

  // return {
  //   props:  {
  //     singleProduct,
  //     revalidate: 10,
  //   }
  // }

}


