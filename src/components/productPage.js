import React from 'react';
import productData from '../data/productData';
import ProductBoxes from './productBoxes';
import NotFound from "../pages/NotFound";


const ProductPage = ({ match }) => {
        
    const { name } = match.params;
    
    const product = productData.find(item => item.name === name );

    const otherProducts = productData.filter(item => item.name !== name );

    if(!product) return <NotFound/>

    return(
        <>

        <figure 
          className="product_box" 
          style={{"width":"40%", "margin":"auto", "display":"block"}}
        >
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
              
        <div>
            <ProductBoxes productdata={otherProducts} />
          </div> 
     
        </>
    )


};

export default ProductPage;
