import Image from 'next/image'
import Link from 'next/link'
import { CartIcon } from '../Images/Icons'
import { useAppSelector } from '../../app/store'
import { selectAllCartItems } from '../../features/cart/cartSlice'

export default function Header() {
  const { cartItems } = useAppSelector(selectAllCartItems)

  return (
    <header id="site-header">
      <figure id="logo">
        <Image
          src="/images/shoe-store-logo.png"
          width={341}
          height={71}
          alt="shoe-store-logo"
          priority={true} // above the fold image
        />
      </figure>

      <div id="cart-icon">
        <CartIcon />
        <Link href="/cart" id="cart-icon-btn">
          {cartItems ? cartItems.length : ''}
        </Link>{' '}
      </div>
    </header>
  )
}
