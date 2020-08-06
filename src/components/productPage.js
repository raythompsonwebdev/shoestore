import React from 'react';
import productData from '../data/productData';

const ProductPage = ({ match }) => {
        
    const { name } = match.params;

    console.log(productData)
    
    const product = productData.find(item => item.name === name );



    if(!product) return <h1>Article does not exist</h1>

    return(
        <>

    <figure className="product_box" style={{"width":"50%", "margin":"auto", "display":"block"}}>
      <img className="product_boximg" src={product.imgUrl} alt={name} />
      <figcaption className="product_boxdetails">
        <p className="product_name">
          {' '}
          {product.name}
        </p>
        <p className="product_price">
          £
          {product.price}
        </p>
        <img className="cart_icon" src={product.cartImg} alt="shoppingcart icon" />

      </figcaption>
    </figure>
            
            
        </>
    )


};

export default ProductPage;
