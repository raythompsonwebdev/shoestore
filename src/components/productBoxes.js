import React from "react";
import ProductBox from "./productBox";

function ProductBoxes(props) {
    
  const Product = props.productdata.map( (item, i) => (
    
      <ProductBox
        key={i}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
      />
  ))

return <div className="product_boxes">{Product}</div>;
}

export default ProductBoxes;
