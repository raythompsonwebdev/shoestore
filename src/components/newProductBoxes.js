import React from "react";
import NewProductBox from "./newProductBox";
//import NewproductData from "../data/newproductData";

function newProductBoxes({newproducts}) {

  console.log(newproducts)

    const NewProduct = newproducts.map(item => (

        <NewProductBox
          key={item.id}
          name={item.name}
          imgUrl={item.imgUrl}
          price={item.price}
          cartUrl={item.cartUrl}
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
