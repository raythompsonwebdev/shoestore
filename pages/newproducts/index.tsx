import { SetStateAction, useState } from "react";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/Layout";
import NewProductBoxes from "../../components/newProduct/newProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import { handler } from "../api";
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
    const resultsfour = await db.collection("searchBarData").find({}).toArray();

    if (results.length > 0) {
      console.log(`${results.length} customers found`);
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`);
    }

    const product = JSON.parse(JSON.stringify(results));
    const accordian = JSON.parse(JSON.stringify(resultstwo));
    const searchresults = JSON.parse(JSON.stringify(resultsfour));

    return {
      props: { product, accordian, searchresults },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function NewProducts({
  product,
  accordian,
  searchresults,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [productData] = useState(product);
  const [accordianData] = useState(accordian);
  const [searchbarData] = useState(searchresults);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [visibility, setVisibility] = useState(false);
  // const [lastIndex, setLastIndex] = useState(0);

  // eslint-disable-next-line react/no-unused-class-component-methods
  const handleChange = (selectedSize: SetStateAction<string>) => {
    setOrderByVal(selectedSize);
    setOrderByDir("asc");
  };

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  //eslint-disable-next-line react/no-unused-class-component-methods
  const changesOrders = (
    orderbyval: SetStateAction<string>,
    dir: SetStateAction<string>
  ) => {
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

// export async function getStaticProps() {
//   const productData = await handler("http://localhost:8000/api/products");
//   const accordian = await handler("http://localhost:8000/api/accordiondata");
//   const searchresults = await handler(
//     "http://localhost:8000/api/searchbardata"
//   );

//   // The value of the `props` key will be
//   //  passed to the `Home` component
//   return {
//     props: {
//       productData,
//       accordian,
//       searchresults,
//     },
//     //unstable_revalidate: 10,
//     revalidate: 10,
//   };
// }
