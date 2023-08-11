import { useState, SetStateAction } from 'react'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '../../app/store';
import { selectAllProducts} from '../../features/products/productSlice'
import { formatPrice} from '../../helpers/index'
import {ProductType} from '../../types/index'


const SingleProduct = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any>([]);

  const singleProd = useAppSelector(selectAllProducts)

  const router = useRouter()

  const { prodname } = router.query


  const result = singleProd.find((product) => product.name === prodname)

  const { color, gender, imgUrl, likes, name, price, prodId, qty, size, style, text,_id } = {...result}

  console.log(qty, cartItems )
  const [productInfo, setProductInfo] = useState<{likes:number | undefined}>({ likes: likes })

  useEffect(() => {

    if(window.localStorage){
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  },[cartItems]);

  const onAdd = (product: { prodId: SetStateAction<number> }) => {
    const exist = cartItems.find((x:{prodId:number}) => x.prodId === product.prodId)

    if (exist) {
      setCartItems(
        cartItems.map((x:ProductType) =>
          x.prodId === product.prodId ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems , { ...product, qty: 1 }])
    }
  }

  return result !== undefined ? (

    <Layout>
      <>
        <Head>
          <title>Single Product</title>
          <meta name="description" content="Single Product" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title" >Product Page</h1>
          <figure id="product-page-box">
            <Image
              id="product-page-img"
              src={imgUrl || ' '}
              alt={style || ' '}
              width={175}
              height={150}
            />
            <figcaption id="product-page-caption">
              <p className="product-page-title"> {name}</p>
              <p id="product-page-price">{formatPrice(price || 0)}</p>
              <p className="product-page-title">Gender : {gender}</p>
              <p className="product-page-title">Size : {size}</p>
              <p className="product-page-title">Color : {color}</p>
              <p className="product-page-title">Prod SKU : {prodId}</p>
              <p>{text}</p>

              <LikesSection
                likes={productInfo.likes || 0}
                productName={prodname}
                setProductInfo={setProductInfo}
                prodid={_id}
              />

              <button onClick={() => onAdd(result)} className="upvotes-section-btn">Add To Cart</button>
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

