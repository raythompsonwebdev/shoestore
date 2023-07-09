// import PropTypes from "prop-types";
import { Key } from 'react'
import ProductBox from './specialsProductBox'
import {Product} from "../../types/index"

export default function SpecialsProductBoxes(props: {
  productData: Product[]}) {

  const { productData } = props

  const Product = productData
    .slice(0, 20)
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
