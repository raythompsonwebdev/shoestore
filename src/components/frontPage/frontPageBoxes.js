import React from 'react';
import PropTypes from 'prop-types';
import FrontPageBox from './frontPageBox';

const FrontPageBoxes = (props) => {
  const { productData } = props;

  const NewProduct = productData.slice(0, 8).map((item) => (

    <FrontPageBox
      key={item.prodId}
      name={item.name}
      imgUrl={item.imgUrl}
      price={item.price}
      cartImg={item.cartImg}
    />

  ));

  return (

    <div className="product_boxes">

      {NewProduct}

    </div>
  );
}

FrontPageBoxes.propTypes = {
  productData: PropTypes.any.isRequired,
};

export default FrontPageBoxes;
