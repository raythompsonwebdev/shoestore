import Link from 'next/link'
import React from 'react'
import ProductImage from '../Images/ProductImage'
import CartIcon from '../Images/CartIcon'
import { formatPrice } from '../../helpers/index'

const productBox = (props: {
  imgUrl: string
  name: string
  cartImg: string
  price: number
  style: string
}) => {
  const { imgUrl, name, cartImg, price, style } = props

  return (
    <figure className="product-box">

      <ProductImage src={imgUrl} alt={name} cname={'product-page-img'} />

      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price ">{formatPrice(price)}</p>
        <Link href={`/product/${name}`} className="product-box-icon-link">
        <CartIcon src={cartImg} alt={"shopping-cart icon"} cname={"product-box-icon"}/>
        </Link>
      </figcaption>
    </figure>
  )
}

export default productBox
