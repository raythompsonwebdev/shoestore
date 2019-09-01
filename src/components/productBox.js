import React from "react";

function productBox(props) {

  
  return (
    <figure className="product_box">
            
    <img className="product_boximg" src={props.imgUrl} alt="kids-trainer" />

    <figcaption className="product_boxdetails">
      <img
        className="product_icon"
        src={props.CartImgUrl}
        alt="shoppingcart"
      />
      <span className="price"> {props.name}</span>
      <span className="price">{props.price}</span>
    </figcaption>
  </figure>

  );
}

export default productBox;