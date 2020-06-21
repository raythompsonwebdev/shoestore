import React from "react";


function productBox({imgUrl, name, price, cartImg}) {

  return (
    <figure className="product_box">
      <img className="product_boximg" src={imgUrl} alt={name} />
      <figcaption className="product_boxdetails">        
        <p className="product_name"> {name}</p>
        <p className="product_price">{price}</p>
        <img className="cart_icon" src={cartImg} alt="shoppingcart icon" />
      </figcaption>
    </figure>
  );
}

export default productBox;
