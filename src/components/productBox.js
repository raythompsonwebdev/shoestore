import React from "react";
import cartImg from "../images/shoppingcart.gif"

function productBox(props) {
  
  return (
    <figure className="product_box">
      <img className="product_boximg" src={props.imgUrl} alt={props.name} />

      <figcaption className="product_boxdetails">
        <img className="product_icon" src={cartImg} alt="shoppingcart icon" />
        <span className="price"> {props.name}</span>
        <span className="price">{props.price}</span>
      </figcaption>
    </figure>
  );
}

export default productBox;
