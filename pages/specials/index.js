import React, { useState } from "react";
import SpecialsProductBoxes from "../../components/specials/specialsProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchSelect from "../../components/searchSelect/SearchSelect";
import Head from "next/head";
import Layout from "../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { handler } from "../api";

export default function Specials(props) {
  const [accordianData] = useState(props.accordian);
  const [productData] = useState(props.productData);
  const [searchBarData] = useState(props.searchresults);
  const [selectBarData] = useState(props.selectresults);
  const [OrderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [visibility, setVisibility] = useState(false);
  // const [lastIndex, setLastIndex] = useState(0);

  const handleChange = (selected) => {
    setOrderByVal(selected);
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
          <title>Specials</title>
          <meta name="description" content="Specials" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <SearchBar
            labelname="Specials"
            orderByVal={OrderByVal}
            orderDir={OrderDir}
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
            <AccordianMenu accordianData={accordianData} />
          </aside>

          <section id="right-content-section" role="main">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={OrderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectBarData}
            />
            <br />

            <SpecialsProductBoxes productData={filteredApts} />

            <br />
          </section>
        </main>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const productData = await handler("http://localhost:8000/api/products");
  const searchresults = await handler(
    "http://localhost:8000/api/searchbardata"
  );
  const selectresults = await handler("http://localhost:8000/api/selectdata");
  const accordian = await handler("http://localhost:8000/api/accordiondata");
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      productData,
      searchresults,
      selectresults,
      accordian,
    },
  };
}
