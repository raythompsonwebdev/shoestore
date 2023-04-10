import React, { useState } from "react";
import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Layout from "../components/Layout";
import BannerImg from "../components/homepage/bannerImg";
import HomePageBoxes from "../components/homepage/homepageBoxes";
import AccordianMenu from "../components/accordianMenu";
import FindShoes from "../components/homepage/FindShoes";
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

    if (results.length > 0) {
      console.log(`${results.length} customers found`);
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`);
    }

    const product = JSON.parse(JSON.stringify(results));
    const accordian = JSON.parse(JSON.stringify(resultstwo));

    return {
      props: { product, accordian },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
};

export default function Home({
  product,
  accordian,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [accordianData] = useState<Array<any>>(accordian);
  const [productData] = useState<Array<any>>(product);
  const [visibility, setVisibility] = useState<boolean>(false);

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  return (
    <Layout>
      <>
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

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
            <AccordianMenu accordianData={accordianData} />
          </aside>

          <section id="right-content-section" className="group">
            <BannerImg />

            <h1 id="right-content-section-header">Featured</h1>
            <HomePageBoxes productData={productData} />
          </section>
        </main>
      </>
    </Layout>
  );
}
