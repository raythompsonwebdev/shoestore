import React from "react";
import PropTypes from "prop-types";
import ProductBox from "./productBox";

const ProductBoxes = (props) => {
  const { productData } = props;

  const Product = productData
    .slice(0, 16)
    .map((item) => (
      <ProductBox
        key={item.prodId}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
        style={item.style}
      />
    ));

  return <div className="product_boxes">{Product}</div>;
};

ProductBoxes.propTypes = {
  productData: PropTypes.array.isRequired,
};

export default ProductBoxes;
