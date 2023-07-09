import { SetStateAction, useState, useEffect } from 'react'
import type { InferGetServerSidePropsType } from 'next'
//import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import SpecialsProductBoxes from '../../components/specials/specialsProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
import Head from 'next/head'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import clientPromise from '../../lib/mongodb'
import {FilteredData , AllData} from "../../types/index"

export default function Specials(props: InferGetServerSidePropsType<typeof getServerSideProps> ) {

  const {product, accordian,searchresults,selectresults } : AllData = props.allData;

  const [productData, setProductData] = useState<Array<FilteredData>>([])
  const [OrderDir, setOrderByDir] = useState<string>('asc')
  const [OrderByVal, setOrderByVal] = useState<string>('all')
  const [visibility, setVisibility] = useState<boolean>(false)

  useEffect(() => {
    // Update products state
    setProductData(product)
  },[product]);

  const handleChange = (selected: SetStateAction<string>) => {
    setOrderByVal(selected)
    setOrderByDir('asc')
  }

  const sidebarVisibility = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setVisibility(!visibility)
  }

  const changesOrders = (
    orderbyval: SetStateAction<string>,
    dir: SetStateAction<string>
  ) => {
    setOrderByVal(orderbyval)
    setOrderByDir(dir)
  }

  let filteredApts = productData

  const value = OrderByVal

  filteredApts = filteredApts.filter(
    (item ) => {
      if (
        item.color === value ||
        item.style === value ||
        item.size === value ||
        item.gender === value ||
        item.price === value
      ) {
        return item
      }

      return item[value]
    }
  )

  return (
    <Layout>
      <>
        <Head>
          <title>Specials</title>
          <meta name="description" content="Specials" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <SearchBar labelname="Specials" searchData={searchresults} />

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
            <AccordianMenu accordianData={accordian} />
          </aside>

          <section id="right-content-section" role="main">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={OrderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectresults}
            />
            <SpecialsProductBoxes productData={filteredApts} />

            <br />
          </section>
        </main>
      </>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  // Call an external API endpoint to get posts
  //const res = await fetch('http://localhost:3000/api/alldata')
  //const allData = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  try {
    //await clientPromise
    const client = await clientPromise
    const db = client.db('shoestore')

    const results = await db.collection('products').find({}).toArray()
    const resultstwo = await db.collection('accordianData').find({}).toArray()
    const resultsthree = await db.collection('selectBarData').find({}).toArray()
    const resultsfour = await db.collection('searchBarData').find({}).toArray()

    const product = JSON.parse(JSON.stringify(results))
    const accordian = JSON.parse(JSON.stringify(resultstwo))
    const searchresults = JSON.parse(JSON.stringify(resultsfour))
    const selectresults = JSON.parse(JSON.stringify(resultsthree))

    return {
      props:  {
        allData :{product,accordian,searchresults,selectresults},
        revalidate: 10,
      }
    }
    // res.status(200).send({product,accordian,searchresults,selectresults});

  } catch (e) {
    console.error(e)
  }
  // return {
  //   props:  {
  //     allData,
  //     revalidate: 10,
  //   }
  // }
}
