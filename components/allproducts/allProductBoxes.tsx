import React from 'react'
import ProductBox from './allProductBox'
import {FilteredData} from '../../types/index'

const ProductBoxes = (props: { productData: FilteredData[] }) => {
  const { productData } = props

  const Product = productData
    .slice(0, 16)
    .map(
      (item:FilteredData) => (
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

export default ProductBoxes
