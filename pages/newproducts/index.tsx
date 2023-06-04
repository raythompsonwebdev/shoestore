import { useState } from "react";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Layout from "../../components/Layout";
import NewProductBoxes from "../../components/newProduct/newProductBoxes";
import AccordianMenu from "../../components/accordianMenu";
import SearchBar from "../../components/searchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";

export const getServerSideProps = async () => {
  try {
    //await clientPromise
    const client = await clientPromise;
    const db = client.db("shoestore");

    const results = await db.collection("products").find({}).toArray();
    const resultstwo = await db.collection("accordianData").find({}).toArray();
    const resultsfour = await db.collection("searchBarData").find({}).toArray();

    if (results.length > 0) {
      console.log(`${results.length} customers found`);
      console.log(`${resultstwo.length} accordian data found`);
      console.log(`${resultsfour.length} searchbar data found`);
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
  const [productData] = useState<Array<any>>(product);
  const [accordianData] = useState<Array<string>>(accordian);
  const [searchbarData] = useState<Array<string>>(searchresults);
  const [visibility, setVisibility] = useState<boolean>(false);

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
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
          <SearchBar labelname="New Products" searchData={searchbarData} />

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
