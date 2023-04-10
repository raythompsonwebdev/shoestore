import { Key } from "react";
import NewProductBox from "./newProductBox";

export default function newProductBoxes(props: { productData: any }) {
  const { productData } = { ...props };

  const NewProduct = productData
    .slice(0, 6)
    .map(
      (item: {
        _id: Key | null | undefined;
        name: string;
        imgUrl: string;
        price: string;
        cartImg: string;
        text: string;
      }) => (
        <NewProductBox
          key={item._id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartImg={item.cartImg}
          text={item.text}
        />
      )
    );

  return <div className="larger-product-boxes">{NewProduct}</div>;
}
