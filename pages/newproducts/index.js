import React, { useState } from "react";
import NewProductBoxes from "../../components/newProduct/newProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import productData from "../api/Productdata";
import Head from "next/head";
import Layout from "../../components/Layout";
import accordian from "../api/Accordiondata.js";
import searchBarData from "../api/SearchbarData.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewProducts() {
  // const [productData, setProductData] = useState([]);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  // const [lastIndex, setLastIndex] = useState(0);
  const [visibility, setVisibility] = useState(false);
  // const [searchData, setSearchData] = useState([]);
  // const [selectData, setSelectData] = useState([]);

  // useEffect(() => {
  //   // const fetchProducts = fetch(`/api/products/`);

  //   // get products
  //   const getProducts = fetch("/api/products");

  //   // get search bar options data
  //   const getSearchData = fetch("/api/searchbardata");

  //   // Use promise all to get data for both apis
  //   Promise.all([getProducts, getSearchData])
  //     .then((values) => Promise.all(values.map((element) => element.json())))
  //     .then(([productdata, searchedData]) => {
  //       // deconstruct array of data from both apis responses.
  //       const productDataResult = productdata.map((shoe, index) => {
  //         // eslint-disable-next-line react/destructuring-assignment
  //         setLastIndex(index);
  //         // eslint-disable-next-line no-param-reassign
  //         shoe.prodId = index;

  //         return shoe;
  //       });

  //       setProductData(productDataResult);
  //       setSearchData(searchedData);
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.error(error);
  //       throw new Error("something went wrong");
  //     });
  // }, [lastIndex]);

  // eslint-disable-next-line react/no-unused-class-component-methods
  const handleChange = (selectedSize) => {
    setOrderByVal(selectedSize);
    setOrderByDir("asc");
  };

  const sidebarVisibility = (e) => {
    e.preventDefault();

    setVisibility(!visibility);
  };

  //eslint-disable-next-line react/no-unused-class-component-methods
  const changesOrders = (orderbyval, dir) => {
    setOrderByVal(orderbyval);
    setOrderByDir(dir);
  };

  return (
    <Layout>
      <>
        <Head>
          <title>Specials</title>
          <meta name="description" content="Specials" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <SearchBar
            labelname="New Products"
            orderByVal={OrderByVal}
            orderDir={orderDir}
            changesOrders={changesOrders}
            handleChange={handleChange}
            searchData={searchBarData}
          />

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
            <AccordianMenu accordian={accordian} />
          </aside>

          <section id="right-content-section">
            <NewProductBoxes productData={productData} />

            <br />
            <br />
          </section>
        </main>
      </>
    </Layout>
  );
}
