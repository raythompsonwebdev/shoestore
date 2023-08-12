import { Key } from 'react'
import ProductBox from './specialsProductBox'
import { FilteredData } from '../../types/index'

const SpecialsProductBoxes = (props: { productData: FilteredData[] }) => {
  const { productData } = props

  const Product =
    productData !== undefined
      ? productData
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
      : false

  return <div className="product-boxes">{Product}</div>
}

export default SpecialsProductBoxes
