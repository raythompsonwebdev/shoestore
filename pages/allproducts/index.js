import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import AllProductBoxes from "../../components/allproducts/allProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchSelect from "../../components/searchSelect/SearchSelect";
import { handler } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

export default function allproducts(props) {
  const [accordianData] = useState(props.accordianData);
  const [productData] = useState(props.productData);
  const [searchbarData] = useState(props.searchresults);
  const [selectbarData] = useState(props.selectresults);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [visibility, setVisibility] = useState(false);
  // const [lastIndex, setLastIndex] = useState(0);

  const handleChange = (selectedSize) => {
    setOrderByVal(selectedSize);
    setOrderByDir("asc");
  };

  const sidebarVisibility = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  const changesOrders = (orderbyval, dir) => {
    setOrderByVal(orderbyval);
    setOrderByDir(dir);
  };

  let filteredApts = productData;
  const value = OrderByVal;

  filteredApts = filteredApts.filter((item) => {
    if (
      item.color === value ||
      item.style === value ||
      item.size === value ||
      item.gender === value ||
      item.price === value
    ) {
      return item;
    }
    return item[value];
  });

  return (
    <Layout>
      <>
        <Head>
          <title>All Products</title>
          <meta name="description" content="All Products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <SearchBar
            labelname="All Products"
            orderByVal={OrderByVal}
            orderDir={orderDir}
            changesOrders={changesOrders}
            handleChange={handleChange}
            searchData={searchbarData}
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
            <AccordianMenu accordianData={accordianData} />
          </aside>

          <main id="right-content-section" className="group">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={orderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectbarData}
            />
            <AllProductBoxes productData={filteredApts} />
          </main>
        </main>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const productData = await handler("http://localhost:8000/api/products");
  const accordianData = await handler(
    "http://localhost:8000/api/accordiondata"
  );
  const searchresults = await handler(
    "http://localhost:8000/api/searchbardata"
  );
  const selectresults = await handler("http://localhost:8000/api/selectdata");

  return {
    props: {
      productData,
      accordianData,
      searchresults,
      selectresults,
    },
  };
}
