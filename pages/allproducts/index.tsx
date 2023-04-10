import { SetStateAction, useState } from "react";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/Layout";
import AllProductBoxes from "../../components/allproducts/allProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import SearchSelect from "../../components/searchSelect/SearchSelect";
//import { handler } from "../api";
import "bootstrap/dist/css/bootstrap.min.css";

export const getServerSideProps = async () => {
  try {
    //await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db("shoestore");
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const results = await db.collection("products").find({}).toArray();
    const resultstwo = await db.collection("accordianData").find({}).toArray();
    const resultsthree = await db
      .collection("selectBarData")
      .find({})
      .toArray();
    const resultsfour = await db.collection("searchBarData").find({}).toArray();

    const product = JSON.parse(JSON.stringify(results));
    const accordian = JSON.parse(JSON.stringify(resultstwo));
    const searchresults = JSON.parse(JSON.stringify(resultsfour));
    const selectresults = JSON.parse(JSON.stringify(resultsthree));

    return {
      props: {
        product,
        searchresults,
        selectresults,
        accordian,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Allproducts({
  accordian,
  product,
  searchresults,
  selectresults,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [accordianData] = useState(accordian);
  const [productData] = useState(product);
  const [searchbarData] = useState(searchresults);
  const [selectbarData] = useState(selectresults);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [visibility, setVisibility] = useState(false);
  // const [lastIndex, setLastIndex] = useState(0);

  const handleChange = (selectedSize: SetStateAction<string>) => {
    setOrderByVal(selectedSize);
    setOrderByDir("asc");
  };

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  const changesOrders = (
    orderbyval: SetStateAction<string>,
    dir: SetStateAction<string>
  ) => {
    setOrderByVal(orderbyval);
    setOrderByDir(dir);
  };

  let filteredApts = productData;
  const value = OrderByVal;

  filteredApts = filteredApts.filter(
    (item: {
      [x: string]: any;
      color: string;
      style: string;
      size: string;
      gender: string;
      price: string;
    }) => {
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
    }
  );

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
