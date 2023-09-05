import Head from 'next/head'
import Layout from '../../components/Layout'
import ProductImage from '../../components/Images/ProductImage'
import Link from 'next/link'
import { ProductType } from '../../types/index'
import { useAppSelector } from '../../app/store'
import { selectAllProducts } from '../../features/products/productSlice'
import { formatPrice } from '../../helpers/index'
import { useRouter } from 'next/router'
import CartIcon from '../../components/Images/CartIcon'

const SearchProduct = () => {
  const router = useRouter()

  const { sizeVal, colorVal, genderVal, styleVal } = router.query

  const searchProducts = useAppSelector(selectAllProducts)

  //filter product from the products array
  const products = searchProducts.filter((product) =>
    product.gender === genderVal ||
    product.style === styleVal ||
    product.size === sizeVal ||
    product.color === colorVal
      ? product
      : false
  )

  return products ? (
    <Layout>
      <>
        <Head>
          <title>Search Results</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Search Results</h1>
          {products.map((shoes: ProductType) => (
            <figure id="product-page-box" key={shoes.prodId}>
              <ProductImage
                src={shoes.imgUrl}
                alt={'test'}
                cname={'product-page-img'}
              />
              <figcaption id="product-page-caption">
                <p className="product-page-title"> {shoes.name}</p>
                <p id="product -page-price">{formatPrice(shoes.price)}</p>
                <p className="product-page-title">{shoes.gender}</p>
                <p className="product-page-title">{shoes.size}</p>
                <p className="product-page-title">{shoes.color}</p>
                <p className="product-page-title">
                  <Link
                    href={`/product/${shoes.name}`}
                    className="product-box-icon-link"
                  >
                    <CartIcon
                      src={shoes.cartImg}
                      alt={'shopping-cart icon'}
                      cname={'product-box-icon-link'}
                    />
                  </Link>
                </p>
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
          <title>Search Resultst</title>
          <meta name="description" content="Search Product - All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Search Results</h1>
          <figure id="product-page-box">
            <figcaption id="product-page-caption">
              <p className="product-page-title">No Products Found!</p>
            </figcaption>
          </figure>
        </main>
      </>
    </Layout>
  )
}

export default SearchProduct
