// import PropTypes from "prop-types";
import FrontPageBox from "./FrontPageBox";

export default function FrontPageBoxes(props) {
  const { productData } = props;

  const NewProduct = productData
    .slice(0, 8)
    .map((item) => (
      <FrontPageBox
        key={item.prodId}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
      />
    ));

  return <div className="product-boxes">{NewProduct}</div>;

  //return <div className="product-boxes">test</div>;
}

// FrontPageBoxes.defaultProps = {
//   productData: [],
// };

// FrontPageBoxes.propTypes = {
//   productData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       prodId: PropTypes.number,
//     })
//   ),
// };
