import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'




const Thankyou = () => {
  const router = useRouter()

  const {username, useremail} = router.query;

  return (
    <Layout>
      <>
        <Head>
          <title>Thank You</title>
          <meta name="description" content="Error page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <h1 id="main-content-title">Your Message Has Been Received</h1>

          <section id="main-inner-content" className="group">
          <h3 className="context-title">Thank you for your message {username}</h3>
          <h3 className="context-title">Thank you for your message {useremail}</h3>
          <p>An email has been sent to your email address {useremail}</p>
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

export default Thankyou
