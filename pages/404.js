import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <>
        <Head>
          <title>Not Found</title>
          <meta name="description" content="Error page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" role="main" style={{ minHeight: "400px" }}>
          <h1 className="main-content-title">Oops! Error.</h1>
          <p>
            Click
            <Link href="/" aria-label="go to home page link">
              here
            </Link>
            to get to Home page
          </p>
        </main>
      </>
    </Layout>
  );
}
