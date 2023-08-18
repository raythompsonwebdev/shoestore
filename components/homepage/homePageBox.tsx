import Link from 'next/link'
import CartIcon from '../Images/CartIcon'
import { formatPrice } from '../../helpers/index'
import ProductImage from '../../components/Images/ProductImage'

const FrontPageBox = (props: {
  imgUrl: string
  name: string
  cartImg: string
  price: number
  style: string
}) => {
  const { imgUrl, name, cartImg, price, style } = props

  return (
    <figure className="product-box">
      <ProductImage src={imgUrl} alt={name} cname={'product-box-image'} />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price">{formatPrice(price)}</p>
        <Link href={`/product/${name}`} className="product-box-icon-link">
        <CartIcon src={cartImg} alt={"shopping-cart icon"} cname={"product-box-icon"}/>
        </Link>
      </figcaption>
    </figure>
  )
}

export default FrontPageBox
