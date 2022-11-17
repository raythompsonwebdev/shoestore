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

  const { imgUrl, price, size, style, text } = {
    ...singleProduct,
  };

  return matchingProduct ? (
    <main id="main-content" className="clearfix">
      <h1 id="main-content-title">Product page</h1>
      <figure id="product-page-box">
        <img id="product-page-img" src={imgUrl} alt={style} />
        <figcaption id="product-page-caption">
          <p id="product-page-title"> {style}</p>
          <p id="product -page-price">£{price}</p>
          <p id="productPagegender">{size}</p>
          <p>{text}</p>

          <LikesSection
            likes={productInfo.likes}
            productName={style}
            setProductInfo={setProductInfo}
          />
        </figcaption>
      </figure>

      <h1 className="main-content-title">Other Products</h1>

      <div className="other-products">
        {otherProducts.map((item) => (
          <figure className="other-products-box" key={item.id}>
            <img
              className="other-product-box-img"
              src={item.imgUrl}
              alt={item.name}
            />
            <figcaption className="other-product-box-caption">
              <p className="other-product-box-title"> {item.name}</p>
              <p className="other-product-box-price">£{item.price}</p>
              <Link to={`/product/${item.name}`}>
                <img
                  className="other-product-cart-icon"
                  src={item.cartImg}
                  alt="shopping cart icon"
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
