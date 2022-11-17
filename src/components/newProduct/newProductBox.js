import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NewProductBox(props) {
  const { imgUrl, name, cartImg, price, text } = props;
  const myComponentStyle = {
    backgroundImage: "url('../static/media/product_headline_bg.png')",
    backgroundPosition: "-3% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <figure className="larger-product-box">
      <img className="larger-product-box-image" src={imgUrl} alt={name} />
      <figcaption className="larger-product-box-caption">
        <h1 style={myComponentStyle} className="larger-product-box-title">
          {name}
        </h1>
        <p className="larger-product-box-text">{text}</p>
        <span className="larger-product-box-price">Price :£ {price}</span>
        <span className="larger-product-box-add-to-cart">
          <Link to={`/product/${name}`} className="larger-product-box-link">
            <img
              className="larger-product-box-icon"
              src={cartImg}
              alt="shopping-cart icon"
            />
          </Link>{" "}
          Add to Cart
        </span>
      </figcaption>
    </figure>
  );
}

NewProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  cartImg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewProductBox;
