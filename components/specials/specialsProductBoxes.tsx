// import PropTypes from "prop-types";
import { Key } from "react";
import ProductBox from "./specialsProductBox";

export default function SpecialsProductBoxes(props: { productData: any }) {
  const { productData } = props;

  const Product = productData
    .slice(0, 20)
    .map(
      (item: {
        _id: Key | null | undefined;
        name: any;
        imgUrl: any;
        price: any;
        cartImg: any;
        style: any;
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
    );

  return <div className="product-boxes">{Product}</div>;
}

// ProductBoxes.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   productData: PropTypes.array.isRequired,
// };
