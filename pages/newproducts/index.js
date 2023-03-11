import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import NewProductBoxes from "../../components/newProduct/newProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import { handler } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewProducts(props) {
  const [productData] = useState(props.productData);
  const [accordianData] = useState(props.accordian);
  const [searchbarData] = useState(props.searchresults);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [visibility, setVisibility] = useState(false);
  // const [lastIndex, setLastIndex] = useState(0);

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

export async function getStaticProps() {
  const productData = await handler("http://localhost:8000/api/products");
  const accordian = await handler("http://localhost:8000/api/accordiondata");
  const searchresults = await handler(
    "http://localhost:8000/api/searchbardata"
  );

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      productData,
      accordian,
      searchresults,
    },
    //unstable_revalidate: 10,
    revalidate: 10,
  };
}
