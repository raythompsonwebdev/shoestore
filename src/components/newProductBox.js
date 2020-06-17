import React from "react";

function NewProductBox({name, text, price, cartImg, imgUrl}) {

  return (
    <figure className="product-box_longer">
      <img
        className="product_boximg_longer"
        src={imgUrl}
        alt={name}
      />
      <figcaption className="product_boxdetails_longer">
        <h1>Product : {name}</h1>
        <p>{text}</p>
        <span className="price_longer">Price :{price}</span>
        <span className="price_longer">
          <img
            className="product_icon_longer"
            src={cartImg}
            alt="shopping-cart"
          />
          Add to Cart
        </span>
      </figcaption>
    </figure>
  );
  
}

export default NewProductBox;
