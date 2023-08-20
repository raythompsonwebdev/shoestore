import { useState } from 'react'
import LikesSection from '../../components/LikesSection'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ProductImage from '../../components/Images/ProductImage'
import { useRouter } from 'next/router'
import { useAppSelector, useAppDispatch } from '../../app/store'
import { selectProductByName } from '../../features/products/productSlice'
import { formatPrice } from '../../helpers/index'
import { addToCart} from '../../features/cart/cartSlice';
import { CartIcon } from '../../components/Images/Icons';

const SingleProduct = () => {

  const dispatch = useAppDispatch()

  const router = useRouter()

  const { prodname } = router.query

  const singleProd = useAppSelector((state) => selectProductByName(state, prodname))

  const {
    color,
    gender,
    imgUrl,
    likes,
    name,
    price,
    prodId,
    qty,
    size,
    style,
    text,
    _id,
  } = { ...singleProd }

  console.log(qty)

  const [productInfo, setProductInfo] = useState<{ likes: number | undefined }>(
    { likes: likes }
  )


  // const onAdd = (product: ProductType ) => {
  //   const exist = cartItems.find(
  //     (x: { prodId: number }) => x.prodId === product.prodId
  //   )

  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.prodId === product.prodId ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     )
  //   } else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }])
  //   }
  // }

  return singleProd ? (
    <Layout>
      <>
        <Head>
          <title>Single Product</title>
          <meta name="description" content="Single Product" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Single Product</h1>
          <figure id="product-page-box">
          <ProductImage src={`${imgUrl}`} alt={`${style}`} cname={'product-page-img'} />
            <figcaption id="product-page-caption">
              <p className="product-page-title"> {name}</p>
              <p id="product-page-price">{formatPrice(price || 0)}</p>
              <p className="product-page-title">Gender : {gender}</p>
              <p className="product-page-title">Size : {size}</p>
              <p className="product-page-title">Color : {color}</p>
              <p className="product-page-title">Prod SKU : {prodId}</p>
              <p className="product-page-title">{text}</p>

              <LikesSection
                likes={productInfo.likes || 0}
                productName={prodname}
                setProductInfo={setProductInfo}
                prodid={_id}
              />

              <div id="addtocart-section">
                <button
                  type="submit"
                  onClick={() => dispatch(addToCart(singleProd))}
                  className="addtocart-section-btn"
                >
                  <CartIcon />
                </button>

                <p className="addtocart-section-text">
                  Add to Cart
                </p>
              </div>


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
        <meta name="description" content="Single Product - All" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main-content" className="clearfix">
        <h1 id="main-content-title">Single Product</h1>
        <figure id="product-page-box">
          <figcaption id="product-page-caption">
            <p className="product-page-title">Product not found!</p>
          </figcaption>
        </figure>
      </main>
    </>
  </Layout>
)
}

export default SingleProduct
