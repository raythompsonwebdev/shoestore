import Image from 'next/image'

const CartIcon = (props:{src:string}) => {

  const{src} =props
  return (
    <Image
      className="product-box-icon"
      src={src}
      alt="shoppingcart icon"
      width={34}
      height={48}
    />
  )
}

export default CartIcon
