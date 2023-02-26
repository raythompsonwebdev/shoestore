// @flow
import React, { useState, useEffect } from "react";
import BannerImg from "../components/frontPage/BannerImg";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/frontPage/FindShoes";
import FrontPageBoxes from "../components/frontPage/frontPageBoxes";
// import axios from "axios";

function Home(props) {
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
        throw new Error(error);
      });
  }, [lastIndex]);

  const sidebarVisibility = (e) => {
    e.preventDefault();
    // const { visibility } = { ...this.state };
    // this.setState({ visibility: !visibility });
    setVisibility(!visibility);
  };

  // banner image
  const { banner } = { ...props };

  return (
    <main id="main-content" className="clearfix">
      <button
        id="sidebar-toggle-btn"
        type="button"
        onClick={sidebarVisibility}
        aria-label="secondary menu toggle button"
      >
        SIDE
      </button>

      <aside
        className={`left-side-content ${visibility ? "is-expanded" : " "}`}
      >
        <FindShoes />
        <FindShoesAccord />
      </aside>

      <section id="right-content-section" className="group">
        <BannerImg banner={banner} />

        <h1 id="right-content-section-header">Featured</h1>

        <FrontPageBoxes productData={productData} />
      </section>
    </main>
  );
}

export default Home;