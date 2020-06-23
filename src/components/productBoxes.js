import React from "react";
import ProductBox from "./productBox";

function ProductBoxes(props) {
    
   const Product = props.productdata.map( item => (
    
      <ProductBox
        key={item.id}
        name={item.name}
        imgUrl={item.imgUrl}
        price={item.price}
        cartImg={item.cartImg}
      />
  ))

return <div className="product_boxes">{Product}</div>;
}

export default ProductBoxes;
