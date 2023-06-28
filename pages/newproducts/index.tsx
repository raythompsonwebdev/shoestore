import { useState } from 'react'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import NewProductBoxes from '../../components/newProduct/newProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css'

type NewData = {
  product: [];
  accordian: [];
  searchresults :[];
}

export default function NewProducts(props: InferGetStaticPropsType<typeof getStaticProps>) {

  const {product, accordian,searchresults} = props.newData;

  const [productData] = useState<Array<any>>(product)
  const [accordianData] = useState<Array<string>>(accordian)
  const [searchbarData] = useState<Array<string>>(searchresults)
  const [visibility, setVisibility] = useState<boolean>(false)

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setVisibility(!visibility)
  }

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
            className={`left-side-content ${visibility ? 'is-expanded' : ' '}`}
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
  )
}

export const getStaticProps: GetStaticProps<{
  newData: NewData
}> = async () => {
  // Call an external API endpoint to get posts
  // const res = await handler("http:localhost:3000/api/newproductsdata");
  const res = await fetch('http:localhost:3000/api/newproductsdata')
  const newData = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props:  {
      newData,
      //unstable_revalidate: 10,
      revalidate: 10,
    }
  }
}

