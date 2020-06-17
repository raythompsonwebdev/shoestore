import React from "react";
import NewProductBox from "./newProductBox";


function newProductBoxes({newproducts}) {

    const NewProduct = newproducts.map(item => (

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
