import React from 'react';
import PropTypes from 'prop-types';

function productBox(props) {
  const {
    imgUrl, name, cartImg, price,
  } = props;
  return (
    <figure className="product_box">
      <img className="product_boximg" src={imgUrl} alt={name} />
      <figcaption className="product_boxdetails">
        <p className="product_name">
          {' '}
          {name}
        </p>
        <p className="product_price">
          £
          {price}
        </p>
        <img className="cart_icon" src={cartImg} alt="shoppingcart icon" />
      </figcaption>
    </figure>
  );
}

productBox.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cartImg: PropTypes.string.isRequired,
};

export default productBox;
