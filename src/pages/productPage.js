import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "../static/data/productData";
import LikesSection from "../components/LikesSection";
import NotFound from "./NotFound";

// eslint-disable-next-line func-style
function ProductPage() {
  const { name } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  const [productInfo, setProductInfo] = useState({ likes: 0 });

  useEffect(() => {
    // eslint-disable-next-line func-style
    const fetchData = async () => {
      // add "proxy":"http://localhost:8000/" property to package.json to avoid cors issue

      const result = await fetch(`/api/product/${name}`);
      const body = await result.json();

      setSingleProduct(body);
      setProductInfo(body);
    };

    fetchData();
  }, [name]);

  // const product = productData.find((item) => item.name === name);
  const otherProducts = productData.filter((item) => item.name !== name);

  const matchingProduct = singleProduct;

  const { cartImg, imgUrl, price, size, style, text } = {
    ...singleProduct,
  };

  return matchingProduct ? (
    <main id="content" className="clearfix">
      <h1>Product page</h1>
      <figure id="productPagebox">
        <img id="productPageimg" src={imgUrl} alt={style} />
        <figcaption id="productPagedetails">
          <p id="productPagename"> {style}</p>
          <p id="productPageprice">£{price}</p>
          <p id="productPagegender">{size}</p>
          <p>{text}</p>
          <img id="cartPageicon" src={cartImg} alt="shoppingcart icon" />

          <LikesSection
            likes={productInfo.likes}
            productName={style}
            setProductInfo={setProductInfo}
          />
        </figcaption>
      </figure>

      <h1>Other Products</h1>

      <div id="other_products">
        {otherProducts.map((item) => (
          <figure className="other_product_box" key={item.id}>
            <img
              className="other_product_boximg"
              src={item.imgUrl}
              alt={item.name}
            />
            <figcaption className="other_product_boxdetails">
              <p className="other_product_name"> {item.name}</p>
              <p className="other_product_price">£{item.price}</p>
              <Link to={`/product/${item.name}`}>
                <img
                  className="other_cart_icon"
                  src={item.cartImg}
                  alt="shoppingcart icon"
                />
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  ) : (
    <NotFound />
  );
}

export default ProductPage;
