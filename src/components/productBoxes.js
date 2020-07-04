import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from './productBox';

function ProductBoxes(props) {
  const { productdata } = props;

  const Product = productdata.map((item) => (

    <ProductBox
      key={item.prodId}
      name={item.name}
      imgUrl={item.imgUrl}
      price={item.price}
      cartImg={item.cartImg}
    />
  ));

  return <div className="product_boxes">{Product}</div>;
}

ProductBoxes.propTypes = {
  productdata: PropTypes.shape([]).isRequired,
};

export default ProductBoxes;
