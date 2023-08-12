import { Key } from 'react'
import HomePageBox from './homePageBox'
import { ProductType } from '../../types/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HomePageBoxes = (props: { productData: ProductType[] }) => {
  const { productData } = { ...props }

  let NewProduct

  if (productData !== undefined) {
    NewProduct = productData
      .slice(0, 8)
      .map(
        (item: {
          _id: Key | null | undefined
          name: string
          imgUrl: string
          price: number
          cartImg: string
          style: string
        }) => (
          <HomePageBox
            key={item._id}
            name={item.name}
            imgUrl={item.imgUrl}
            price={item.price}
            cartImg={item.cartImg}
            style={item.style}
          />
        )
      )
  }

  return <div className="product-boxes">{NewProduct}</div>
}

export default HomePageBoxes
