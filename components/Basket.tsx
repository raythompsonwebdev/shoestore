// import { useEffect, useState } from 'react'
import ProductImage from '../components/Images/ProductImage'
import { formatPrice } from '../helpers/index'
import {  useAppDispatch } from '../app/store'
import { increase, decrease, clearCart} from '../features/cart/cartSlice';
import { CartItemType } from '../types/index'

const Basket = (props :{cartItems:CartItemType[]}) => {

  const dispatch = useAppDispatch()

  const itemsPrice = props.cartItems.reduce(
    (a: number, c: { qty: number; price: number }) => a + c.qty * c.price,
    0
  )
  const taxPrice = itemsPrice * 0.14
  const shippingPrice = itemsPrice > 2000 ? 0 : 20
  const totalPrice = itemsPrice + taxPrice + shippingPrice

  return (
    <>
      <main id="main-content" className="clearfix">
        {props.cartItems.length === 0 && <div>Cart is empty</div>}
        {props.cartItems.map(
          (product: CartItemType) => (
            <figure id="product-page-box" key={product.prodId}>
              <ProductImage src={product.imgUrl} alt={product.style} cname={'product-page-img'} />
              <figcaption id="product-page-caption">
                <p className="product-page-title"> {product.name}</p>
                <p className="product-page-title">{product.gender}</p>
                <p className="product-page-title">{product.size}</p>
                <p className="product-page-title">{product.color}</p>
                <div className="col-2">
                  <button
                    onClick={() => dispatch(decrease(product.prodId))}
                    className="remove"
                  >
                    -
                  </button>{' '}
                  <button onClick={() => dispatch(increase(product.prodId))} className="add">
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

        {props.cartItems.length !== 0 && (
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
              <hr />
              <button onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </main>
    </>
  )
}

export default Basket
