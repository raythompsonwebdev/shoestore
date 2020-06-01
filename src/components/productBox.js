import React from "react";
import cartImg from "../images/shoppingcart.gif"

function productBox(props) {

  console.log(props)
  
  return (
    <figure className="product_box">
      <img className="product_boximg" src={props.imgUrl} alt={props.name} />

      <figcaption className="product_boxdetails">

        <img className="cart_icon" src={cartImg} alt="shoppingcart icon" />
                
        <p className="product_name"> {props.name}</p>
        <p className="product_price">{props.price}</p>
      </figcaption>
    </figure>
  );
}

export default productBox;
