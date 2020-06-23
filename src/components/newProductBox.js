import React from "react";

function NewProductBox(props) {  

  return (
    <figure className="product-box_longer">
      <img
        className="product_boximg_longer"
        src={props.imgUrl}
        alt={props.name}
      />
      <figcaption className="product_boxdetails_longer">
        <h1>Product : {props.name}</h1>
        <p>{props.text}</p>
        <span className="price_longer">Price :{props.price}</span>
        <span className="price_longer">
          <img
            className="product_icon_longer"
            src={props.cartImg}
            alt="shopping-cart"
          />
          Add to Cart
        </span>
      </figcaption>
    </figure>
  );
  
}

export default NewProductBox;
