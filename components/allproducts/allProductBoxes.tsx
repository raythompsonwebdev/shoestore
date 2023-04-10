// import PropTypes from "prop-types";
import ProductBox from "./allProductBox";

export default function ProductBoxes(props: { productData: any }) {
  const { productData } = props;

  const Product = productData
    .slice(0, 16)
    .map(
      (item: {
        _id: any;
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
