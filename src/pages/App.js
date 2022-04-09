// @flow
import React, { useState, useEffect } from "react";
import BannerImg from "../components/frontPage/BannerImg";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/frontPage/FindShoes";
import FrontPageBoxes from "../components/frontPage/frontPageBoxes";
// import axios from "axios";

function App() {
  const [productData, setProductData] = useState([]);
  const [lastIndex, setLastIndex] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    const fetchProducts = fetch(`/api/products`);

    fetchProducts
      .then((response) => {
        if (!response.ok) {
          throw new Error("no data provided");
        }
        // eslint-disable-next-line no-console
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        const productDataResult = data.map((shoe, index) => {
          setLastIndex(index);
          // eslint-disable-next-line no-param-reassign
          shoe.prodId = index;
          return shoe;
        });
        setProductData(productDataResult);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, [lastIndex]);

  const sidebarVisibility = (e) => {
    e.preventDefault();
    // const { visibility } = { ...this.state };
    // this.setState({ visibility: !visibility });
    setVisibility(!visibility);
  };

  return (
    <main id="content" className="clearfix">
      <button
        id="sidebar-toggle-btn"
        type="button"
        onClick={sidebarVisibility}
        aria-label="secondary menu toggle button"
      >
        SIDE
      </button>

      <aside className={`left_bar ${visibility ? "is-expanded" : " "}`}>
        <FindShoes />
        <FindShoesAccord />
      </aside>

      <main id="content_section" className="group">
        <BannerImg />

        <h1>Featured</h1>

        <FrontPageBoxes productData={productData} />
      </main>
    </main>
  );
}

export default App;
