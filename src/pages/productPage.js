import React, { useEffect, useState } from 'react';
import productData from '../data/productData';
import LikesSection from '../components/LikesSection';
import { Link } from 'react-router-dom';
import NotFound from "./NotFound";

const ProductPage = ({ match }) => {

    const { name } = match.params;

    const product = productData.find(item => item.name === name );

    const [productInfo, setProductInfo] = useState({likes:0});

    const otherProducts = productData.filter(item => item.name !== name );

    useEffect(() => {
      const fetchData = async () => {

        //http://localhost:8000/api/product/${name}
        // add "proxy":"http://localhost:8000/" property to package.json to avoid cors issue
        // then remove http://localhost:8000

          const result = await fetch(`./productdata.json/${name}`);
          //const result = await fetch(`/api/product/${name}`);
          const body = await result.text();
          setProductInfo(body);
      };

        fetchData();

    }, [name]);



    if(!product) return <NotFound/>

    return(

      <main id="content" className="clearfix">
        <h1>Product page</h1>
        <figure
          id="productPagebox"
        >
          <img id="productPageimg" src={product.imgUrl} alt={name} />
          <figcaption id="productPagedetails">
            <p id="productPagename">
              {' '}
              {product.name}
            </p>
            <p id="productPageprice">
              £
              {product.price}
            </p>
            <p>{product.text}</p>
            <img id="cartPageicon" src={product.cartImg} alt="shoppingcart icon" />

            <LikesSection likes={productInfo.likes} productName={name} setProductInfo={setProductInfo} />
          </figcaption>

        </figure>

        <h1>Other Products</h1>

        <div id="other_products">

          {otherProducts.map((item , key) => (
            <figure className="other_product_box" key={key} >
              <img className="other_product_boximg" src={item.imgUrl} alt={item.name} />
              <figcaption className="other_product_boxdetails">
                <p className="other_product_name">
                  {' '}
                  {item.name}
                </p>
                <p className="other_product_price">
                  £
                  {item.price}
                </p>
                    <Link to={`/product/${item.name}`} >
                      <img className="other_cart_icon" src={item.cartImg} alt="shoppingcart icon" />
                    </Link>
              </figcaption>
            </figure>
          ))}
        </div>

      </main>

    )


};

export default ProductPage;
