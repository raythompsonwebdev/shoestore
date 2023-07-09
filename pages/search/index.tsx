import { useState } from 'react'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import Layout from '../../components/Layout'
import Image from 'next/image'

export const getServerSideProps = async (context:{query: {resultArray :[string,string,string,string]}}) => {

   const [val1,val2,val3,val4] = context.query.resultArray

  try {
    const client = await clientPromise
    const db = client.db('shoestore')
    const results = await db.collection('products').find({$or:[{ "size":  `${val1}`} ,{ "color": `${val2}` },{ "gender": `${val3}` },{ "style": `${val4}` }]} ).toArray()

    if (results.length > 0) {
      console.log(`${results.length} customers found`)
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`)
    }

    const productsearch = JSON.parse(JSON.stringify(results))

    return {
      props: { productsearch },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function SearchProduct({
  productsearch,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [products] = useState(productsearch)
  const [productInfo, setProductInfo] = useState({ likes: 0 })

  return products.length === 0 ? (
    <Layout>
      <>
        <Head>
          <title>Single Search Product</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Search Products page</h1>
          <figure id="product-page-box">
            <figcaption id="product-page-caption">
              <p className="product-page-title">Sorry! No Products Found</p>
            </figcaption>
          </figure>
        </main>
      </>
    </Layout>
  ) : (
    <Layout>
      <>
        <Head>
          <title>Single Product</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Single Product Search</h1>
          {products.map((shoes: {
            prodId:string,
            imgUrl:string,
            name:string,
            price:string,
            gender:string,
            size:string,
            color:string
          }) => (
            <figure id="product-page-box" key={shoes.prodId}>
              <Image
                id="product-page-img"
                src={shoes.imgUrl}
                alt={'test'}
                width={175}
                height={150}
              />
              <figcaption id="product-page-caption">
                <p className="product-page-title"> {shoes.name}</p>
                <p id="product -page-price">£{shoes.price}</p>
                <p className="product-page-title">{shoes.gender}</p>
                <p className="product-page-title">{shoes.size}</p>
                <p className="product-page-title">{shoes.color}</p>
                <p>{''}</p>

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
  )
}
