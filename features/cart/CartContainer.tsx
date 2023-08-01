import React from 'react';
import CartItem from './CartItem';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { clearCart } from './cartSlice';
import './index.css';
// import { openModal } from '../features/modal/modalSlice';
type Props ={
  prodId :number;
  imgUrl:string;
  name:string;
  price:number;
  qty:number;
}


const CartContainer = () => {

  const dispatch = useAppDispatch();

  const { cartItems, total, qty } = useAppSelector((store) => store.cart);

  if (qty < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item:Props) => {
          return <CartItem key={item.prodId} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
