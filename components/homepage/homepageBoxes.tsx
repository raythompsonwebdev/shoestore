import { Key } from "react";
import HomePageBox from "./homePageBox";

export default function HomePageBoxes(props: { productData: Array<any> }) {
  const { productData } = { ...props };

  const NewProduct = productData
    .slice(0, 8)
    .map(
      (item: {
        _id: Key | null | undefined;
        name: string;
        imgUrl: string;
        price: string;
        cartImg: string;
        style: string;
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
    );

  return <div className="product-boxes">{NewProduct}</div>;
}
