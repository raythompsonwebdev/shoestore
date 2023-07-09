import { Key } from 'react'
import NewProductBox from './newProductBox'


export default function newProductBoxes(props: { productData:[] }) {
  const { productData } = { ...props }

  const NewProduct = productData
    .slice(0, 6)
    .map(
      (item: {
        _id: Key | null | undefined
        cartImg: string
        imgUrl: string
        name: string
        price: string
        text: string
      }) => (
        <NewProductBox
          key={item._id}
          cartImg={item.cartImg}
          imgUrl={item.imgUrl}
          name={item.name}
          price={item.price}
          text={item.text}
        />
      )
    )

  return <div className="larger-product-boxes">{NewProduct}</div>
}
