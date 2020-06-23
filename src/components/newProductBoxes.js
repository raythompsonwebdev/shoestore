import React from "react";
import NewProductBox from "../components/newProductBox";

function newProductBoxes(props) {

    const NewProduct = props.productdata.map(item => (

        <NewProductBox
          key={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartImg={item.cartImg}
          text={item.text}
        />
    ))
  
  return (

    <div className="product_boxes_longer">

        {NewProduct}

    </div>
  );
}

export default newProductBoxes;
