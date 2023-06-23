import { SetStateAction, useState } from 'react'
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import SpecialsProductBoxes from '../../components/specials/specialsProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
import Head from 'next/head'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export const getServerSideProps = async (context: any) => {
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
      props: {
        product,
        searchresults,
        selectresults,
        accordian,
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Specials({
  accordian,
  product,
  searchresults,
  selectresults,
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [accordianData] = useState<Array<any>>(accordian)
  const [productData] = useState<Array<any>>(product)
  const [searchBarData] = useState<Array<any>>(searchresults)
  const [selectBarData] = useState<Array<any>>(selectresults)
  const [OrderDir, setOrderByDir] = useState<string>('asc')
  const [OrderByVal, setOrderByVal] = useState<string>('all')
  const [visibility, setVisibility] = useState<boolean>(false)

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
    (item: {
      [x: string]: any
      color: string
      style: string
      size: string
      gender: string
      price: string
    }) => {
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
          <SearchBar labelname="Specials" searchData={searchBarData} />

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

          <section id="right-content-section" role="main">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={OrderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectBarData}
            />
            <SpecialsProductBoxes productData={filteredApts} />

            <br />
          </section>
        </main>
      </>
    </Layout>
  )
}
