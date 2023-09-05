import ProductBox from './specialsProductBox'
import { ProductType } from '../../types/index'

const SpecialsProductBoxes = (props: { productData: ProductType[] }) => {
  const { productData } = props

  const Product =
    productData !== undefined
      ? productData
          .slice(0, 20)
          .map((item: ProductType) => (
            <ProductBox
              key={item._id}
              name={item.name}
              imgUrl={item.imgUrl}
              price={item.price}
              cartImg={item.cartImg}
              style={item.style}
            />
          ))
      : false

  return <div className="product-boxes">{Product}</div>
}

export default SpecialsProductBoxes
