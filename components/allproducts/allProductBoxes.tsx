import { Key } from 'react'
import ProductBox from './allProductBox'

export default function ProductBoxes(props: { productData: Array<any> }) {
  const { productData } = props

  const Product = productData
    .slice(0, 16)
    .map(
      (item: {
        _id: Key | null | undefined
        name: string
        imgUrl: string
        price: string
        cartImg: string
        style: string
      }) => (
        <ProductBox
          key={item._id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartImg={item.cartImg}
          style={item.style}
        />
      )
    )

  return <div className="product-boxes">{Product}</div>
}
