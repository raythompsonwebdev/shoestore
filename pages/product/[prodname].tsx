import { useState } from 'react'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'


type SingleProduct = []

type Product = {
  style: string;
  price: string;
  size :string;
  color: string;
  text:string;
  likes:number;
  imgUrl:string;
}

export default function SingleProduct(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const {singleProduct} = props;

  const [product] : Array<Product> = [singleProduct][0];

  const [productInfo, setProductInfo] = useState({ likes: 0 })

  const router = useRouter()

  const { prodname } = router.query

  const { _id, color, imgUrl, name, price, size, style, text }: any = {...product}


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

export const getStaticProps: GetStaticProps<{
  singleProduct: SingleProduct
}> = async (context:any) => {

  const {params} = context

  console.log(params)

  // Call an external API endpoint to get posts
  // const res = await fetch('http:localhost:3000/api/singleproduct') // get single product from database
  const res = await fetch('http:localhost:3000/api/homepagedata')
  const products = await res.json();

  const{product, accordian} = products

  //
  const singleProduct = product.filter((prod: { name: string })=> prod.name === params.prodname)

    return {
      props:  {
        singleProduct,
        revalidate: 10,
      }
    }

}

export async function getStaticPaths() {

  // Call an external API endpoint to get posts
  const res = await fetch('http:localhost:3000/api/homepagedata')
  const products = await res.json()

  const{product, accordian} = products

  // Get the paths we want to pre-render based on posts
  const paths = product.map((prod: { name: string }) => ({
    params: { prodname: prod.name.toString() },
  }))

 return { paths, fallback: false }
}
