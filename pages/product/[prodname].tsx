import { useState } from 'react'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../app/store';
import { selectAllProducts} from '../../features/products/productSlice'
import { formatPrice} from '../../helpers/index'

type UnoProduct = {
  all :string;
  cartImg:string;
  color: string;
  gender:string;
  imgUrl:string;
  likes:number;
  name:string;
  price: number;
  prodId :number;
  qty:number;
  size :string;
  style: string;
  text:string;
  _id:string;
}

const SingleProduct = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const singleProd:any = useAppSelector(selectAllProducts)

  const router = useRouter()

  const { prodname } = router.query

  console.log(prodname)

  const result = singleProd.products?.find((product:UnoProduct) => product.name === prodname)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { all, cartImg, color, gender, imgUrl, likes, name, price, prodId, qty, size, style, text,_id } = result as UnoProduct

  const [productInfo, setProductInfo] = useState({ likes: likes })
//console.log(all, cartImg, color, gender, imgUrl, likes, name, price, prodId, qty, size, style, text,_id)

  // const onAdd = (product: { id: string }) => {
  //   const exist = cartItems.find((x) => x.id === product.id)

  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     )
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }])
  //   }
  // }

  return result !== undefined ? (

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
              <p id="product-page-price">{formatPrice(price)}</p>
              <p className="product-page-title">Gender : {gender}</p>
              <p className="product-page-title">Size : {size}</p>
              <p className="product-page-title">Color : {color}</p>
              <p className="product-page-title">Prod SKU : {prodId}</p>
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

export default SingleProduct

