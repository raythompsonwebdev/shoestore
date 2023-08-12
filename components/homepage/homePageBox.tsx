import Link from 'next/link'
import Image from 'next/image'
import CartIcon from '../Images/CartIcon'
import { formatPrice } from '../../helpers/index'

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
      <Image
        className="product-box-img"
        src={imgUrl}
        alt={name}
        width="175"
        height="150"
      />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {style}</p>
        <p className="product-box-price">{formatPrice(price)}</p>
        <Link href={`/product/${name}`} className="product-box-icon-link">
          <CartIcon src={cartImg}/>
        </Link>
      </figcaption>
    </figure>
  )
}

export default FrontPageBox
