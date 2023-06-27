import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Custom500() {
  return (
    <Layout>
      <>
        <Head>
          <title>500 Error</title>
          <meta name="description" content="Error page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">500 Error Page</h1>

          <section id="main-inner-content" className="group">
            <h2 className="main-inner-content-title">Oops! Error.</h2>
            <p>
              Click
              <Link href="/" aria-label="go to home page link">
                here
              </Link>
              to get back to the home page.
            </p>
          </section>
        </main>
      </>
    </Layout>
  )
}
