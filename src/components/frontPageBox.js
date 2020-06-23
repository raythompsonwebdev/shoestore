import React from "react";

function FrontPageBox(props) {  

  return (
    <figure className="product_box">
      <img className="product_boximg" src={props.imgUrl} alt={props.name} />
      <figcaption className="product_boxdetails">        
        <p className="product_name"> {props.name}</p>
        <p className="product_price">{props.price}</p>
        <img className="cart_icon" src={props.cartImg} alt="shoppingcart icon" />
      </figcaption>
    </figure>
  );
  
}

export default FrontPageBox;
