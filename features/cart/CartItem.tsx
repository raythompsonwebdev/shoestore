//import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from './cartSlice'
import { useAppDispatch } from '../../app/store'
import Image from 'next/image'

type Props = {
  prodId: number
  imgUrl: string
  name: string
  price: number
  qty: number
}

const CartItem = ({ prodId, imgUrl, name, price, qty }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <article className="cart-item">
      <Image
        className="product-box-icon"
        src={imgUrl}
        alt={name}
        width="34"
        height="48"
      />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(prodId))
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ prodId }))
          }}
        >
          + {/* <ChevronUp /> */}
        </button>
        <p className="amount">{qty}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (qty === 1) {
              dispatch(removeItem(prodId))
              return
            }
            dispatch(decrease({ prodId }))
          }}
        >
          - {/* <ChevronDown /> */}
        </button>
      </div>
    </article>
  )
}
export default CartItem
