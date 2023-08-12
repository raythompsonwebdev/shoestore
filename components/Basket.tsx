import { useEffect, useState } from 'react'
import Image from 'next/image'
import { formatPrice } from '../helpers/index'

type CartItemType = {
  all: string
  cartImg: string
  color: string
  gender: string
  imgUrl: string
  likes: number
  name: string
  price: number
  prodId: number
  qty: number
  size: string
  style: string
  text: string
  _id: string
}

const Basket = (props: {
  cartItems: CartItemType[]
  onAdd: (product: { prodId: number }) => void
  onRemove: (product: { prodId: number }) => void
}) => {
  console.log(props)

  const [cartItemResult, setCartItems] = useState([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cartItems: any = []
    // Get the value from local storage if it exists
    try {
      cartItems = localStorage.getItem('cart') || ''
    } catch (e) {
      console.log(e)
    }
    //  console.log(JSON.parse(cartItemsTest))
    setCartItems(JSON.parse(cartItems))
  }, [])

  console.log(cartItemResult)

  const itemsPrice = cartItemResult.reduce(
    (a: number, c: { qty: number; price: number }) => a + c.qty * c.price,
    0
  )
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <>
      <main id="main-content" className="clearfix">
        {cartItemResult.length === 0 && <div>Cart is empty</div>}
        {cartItemResult.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (product: any) => (
            <figure id="product-page-box" key={product.prodId}>
              <Image
                id="product-page-img"
                src={product.imgUrl}
                alt={'test'}
                width={175}
                height={150}
              />
              <figcaption id="product-page-caption">
                <p className="product-page-title"> {product.name}</p>
                <p className="product-page-title">{product.gender}</p>
                <p className="product-page-title">{product.size}</p>
                <p className="product-page-title">{product.color}</p>
                <div className="col-2">
                  <button
                    onClick={() => props.onRemove(product)}
                    className="remove"
                  >
                    -
                  </button>{' '}
                  <button onClick={() => props.onAdd(product)} className="add">
                    +
                  </button>
                </div>

                <div className="col-2 text-right">
                  {product.qty} x {formatPrice(product.price)}
                </div>
              </figcaption>
            </figure>
          )
        )}

        {cartItemResult.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">{formatPrice(itemsPrice)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">{formatPrice(taxPrice)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                {formatPrice(shippingPrice)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Basket
