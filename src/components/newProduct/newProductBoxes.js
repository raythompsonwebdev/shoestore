import React from "react";
import PropTypes from "prop-types";
import NewProductBox from "./newProductBox";

function newProductBoxes(props) {
  const { productData } = props;

  const NewProduct = productData
    .slice(0, 4)
    .map((item) => (
      <NewProductBox
        key={item.prodId}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
        text={item.text}
      />
    ));

  return <div className="product_boxes_longer">{NewProduct}</div>;
}

newProductBoxes.propTypes = {
  productData: PropTypes.string,
};

export default newProductBoxes;
