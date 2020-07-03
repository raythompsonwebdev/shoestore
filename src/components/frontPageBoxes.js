import React from "react";
import FrontPageBox from "./frontPageBox";

function FrontPageBoxes(props) {

    const NewProduct = props.productdata.slice(0, 8).map((item,i) => (

        <FrontPageBox
          key={i}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartImg={item.cartImg}
          
        />
        
    ))
  
  return (

    <div className="product_boxes">

        {NewProduct}

    </div>
  );
}

export default FrontPageBoxes;
