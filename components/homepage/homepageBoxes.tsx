//import { Key } from 'react'
import HomePageBox from './homePageBox'
import {Product} from '../../types/index'

export default function HomePageBoxes(props: { productData : Product[] }) {
  const { productData } = { ...props }

  if(productData !== undefined){

    const NewProduct = productData
      .slice(0, 8)
      .map(
        (item) => (
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


    return <div className="product-boxes">{NewProduct}</div>
  }
}
