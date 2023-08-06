//import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Image from 'next/image'
import {ProductType} from '../../types/index'
import { useAppSelector } from '../../app/store';
import { selectAllProducts} from '../../features/products/productSlice'
import { formatPrice} from '../../helpers/index'

const SearchProduct = () => {

  const queryString = window.location.search;

  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const searchGender = urlParams.get('genderVal')
  const searchStyle = urlParams.get('styleVal')
  const searchSize = urlParams.get('sizeVal')
  const searchColor = urlParams.get('colorVal')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const searchProducts:any = useAppSelector(selectAllProducts)

  console.log(searchProducts.products);

  console.log(searchGender, searchStyle , searchSize, searchColor);

  //filter product from the products array
  const products = searchProducts.products.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (product :any) =>
      product.gender === searchGender ||
      product.style === searchStyle ||
      product.size === searchSize ||
      product.color === searchColor  ? product: false
  );

  //const [products] = useState(productsearch)

  //const products : ProductType[] = [];

  return products === undefined ? (
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
          {products.map((shoes: ProductType) => (
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
                <p id="product -page-price">{formatPrice(shoes.price)}</p>
                <p className="product-page-title">{shoes.gender}</p>
                <p className="product-page-title">{shoes.size}</p>
                <p className="product-page-title">{shoes.color}</p>
                <p>{''}</p>


              </figcaption>
            </figure>
          ))}
        </main>
      </>
    </Layout>
  )
}


export default SearchProduct
