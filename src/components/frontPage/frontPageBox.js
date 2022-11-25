import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function FrontPageBox(props) {
  const { imgUrl, name, cartImg, price } = props;

  return (
    <figure className="product-box">
      <img className="product-box-img" src={imgUrl} alt={name} />
      <figcaption className="product-box-caption">
        <p className="product-box-title"> {name}</p>
        <p className="product-box-price">{price}</p>
        <Link to={`/product/${name}`} className="product-box-icon-link">
          <img
            className="product-box-price-icon"
            src={cartImg}
            alt="shoppingcart icon"
          />
        </Link>
      </figcaption>
    </figure>
  );
}

FrontPageBox.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cartImg: PropTypes.string.isRequired,
};

export default FrontPageBox;
