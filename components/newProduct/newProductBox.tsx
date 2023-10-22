import Link from 'next/link'
import { formatPrice } from '../../helpers/index'
import ProductImage from '../Images/ProductImage'
import CartIcon from '../Images/CartIcon'

const NewProductBox = (props: {
  imgUrl: string
  name: string
  cartImg: string
  price: number
  text: string
}) => {
  const { imgUrl, name, cartImg, price, text } = props
  const myComponentStyle = {
    backgroundImage: "url('/images/product_headline_bg.png')",
    backgroundPosition: '0% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
  return (
    <figure className="larger-product-box">
      <ProductImage
        src={imgUrl}
        alt={name}
        cname={'larger-product-box-image'}
      />
      <figcaption className="larger-product-box-caption">
        <h1 style={myComponentStyle} className="larger-product-box-title">
          {name}
        </h1>
        <p className="larger-product-box-text">{text}</p>
        <span className="larger-product-box-price">
          Price: {formatPrice(price)}
        </span>
        <span className="larger-product-box-add-to-cart">
          <Link href={`/product/${name}`} className="larger-product-box-link">
            <CartIcon
              src={cartImg}
              alt={'shopping-cart icon'}
              cname={'larger-product-box-icon'}
            />
          </Link>{' '}
          Add to Cart
        </span>
      </figcaption>
    </figure>
  )
}

export default NewProductBox
