import Link from 'next/link'
import CartIcon from '../Images/CartIcon'
import ProductImage from '../Images/ProductImage'
import { formatPrice } from '../../helpers/index'

const SpecialsproductBox = (props: {
  imgUrl: string
  name: string
  cartImg: string
  price: number
  style: string
}) => {
  const { imgUrl, name, cartImg, price, style } = props

  return (
    <figure className="product-box">

      <ProductImage src={imgUrl} name={name}/>

      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price ">{formatPrice(price)}</p>

        <Link href={`/product/${name}`} className="product-box-icon-link">
          <CartIcon src={cartImg}/>
        </Link>

      </figcaption>
    </figure>
  )
}

export default SpecialsproductBox
