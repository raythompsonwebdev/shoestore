import { Key } from 'react'
import HomePageBox from './homePageBox'
import {Product} from '../../types/index'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePageBoxes(props: { productData : Product[]}) {
  const { productData } = { ...props }

  let NewProduct

  if(productData !== undefined){

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
  // return <div className="product-boxes"></div>

}
