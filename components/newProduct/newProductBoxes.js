// import PropTypes from "prop-types";
import NewProductBox from "./newProductBox";

export default function newProductBoxes(props) {
  const { productData } = { ...props };

  const NewProduct = productData
    .slice(0, 6)
    .map((item) => (
      <NewProductBox
        key={item._id}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
        text={item.text}
      />
    ));

  return <div className="larger-product-boxes">{NewProduct}</div>;
}

// newProductBoxes.defaultProps = {
//   productData: [],
// };

// newProductBoxes.propTypes = {
//   productData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       prodId: PropTypes.number,
//     })
//   ),
// };
