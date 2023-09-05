import React from 'react'
import NewProductBox from './newProductBox'
import { ProductType } from '../../types/index'

const newProductBoxes = (props: { productData: ProductType[] }) => {
  const { productData } = { ...props }

  const NewProduct = productData
    .slice(0, 6)
    .map((item: ProductType) => (
      <NewProductBox
        key={item._id}
        cartImg={item.cartImg}
        imgUrl={item.imgUrl}
        name={item.name}
        price={item.price}
        text={item.text}
      />
    ))

  return <div className="larger-product-boxes">{NewProduct}</div>
}

export default newProductBoxes
