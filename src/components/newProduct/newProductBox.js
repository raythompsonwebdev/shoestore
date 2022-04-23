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
    <figure className="product-box_longer">
      <img className="product_boximg_longer" src={imgUrl} alt={name} />
      <figcaption className="product_boxdetails_longer">
        <h1 style={myComponentStyle}>Product :{name}</h1>
        <p>{text}</p>
        <span className="price_longer">
          Price :£
          {price}
        </span>
        <span className="price_longer">
          <Link to={`/product/${name}`}>
            <img
              className="product_icon_longer"
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
