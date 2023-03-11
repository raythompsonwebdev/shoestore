// import PropTypes from "prop-types";
import ProductBox from "./specialsProductBox";

export default function SpecialsProductBoxes(props) {
  const { productData } = props;

  const Product = productData
    .slice(0, 20)
    .map((item) => (
      <ProductBox
        key={item._id}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
        style={item.style}
      />
    ));

  return <div className="product-boxes">{Product}</div>;
}

// ProductBoxes.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   productData: PropTypes.array.isRequired,
// };
