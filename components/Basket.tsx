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
                <p className="product-page-title">
                  <button
                    className="product-page-btn"
                    onClick={() => dispatch(decrease(product.prodId))}
                  >
                    REMOVE
                  </button>
                  <button onClick={() => dispatch(increase(product.prodId))} className="product-page-btn">
                    ADD
                  </button>
                  Qty : {product.qty}
                </p>
                <p className="product-page-title">
                  Sub Total : {formatPrice(product.price)}
                </p>
              </figcaption>
            </figure>
          )
        )}

        {props.cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="items-price">
              <div className="result-title">Items Price</div>
              <div className="final-result">{formatPrice(itemsPrice)}</div>
            </div>
            <div className="tax-price">
              <div className="result-title">Tax Price</div>
              <div className="final-result">{formatPrice(taxPrice)}</div>
            </div>
            <div className="shipping-price">
              <div className="result-title">Shipping Price</div>
              <div className="final-result">
                {formatPrice(shippingPrice)}
              </div>
            </div>

            <div className="total-price">
              <div className="result-title">
                <strong>Total Price</strong>
              </div>
              <div className="final-result">
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
            </div>
            <hr />
            <div className="clear-cart-checkout">
              <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
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
