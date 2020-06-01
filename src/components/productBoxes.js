import React from "react";
import ProductBox from "./productBox";
import productData from "../data/productData";

function ProductBoxes() { 

  const Product = productData.map(item => (
      <ProductBox
        key={item.id}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        
      />
  ))

  return <div className="product_boxes">{Product}</div>;
}

export default ProductBoxes;
