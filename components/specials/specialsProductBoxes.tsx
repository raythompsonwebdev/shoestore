import { Key } from 'react'
import ProductBox from './specialsProductBox'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const SpecialsProductBoxes = (props: { productData: any}) => {

  const { productData } = props

  const Product = productData
    .slice(0, 20)
    .map(
      (item: {
        _id: Key | null | undefined
        name: string
        imgUrl: string
        price: number
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

export default SpecialsProductBoxes
