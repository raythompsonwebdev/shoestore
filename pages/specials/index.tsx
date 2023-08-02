import { SetStateAction, useState, useEffect } from 'react'
import type { InferGetServerSidePropsType } from 'next'
import SpecialsProductBoxes from '../../components/specials/specialsProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
import Head from 'next/head'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import clientPromise from '../../lib/mongodb'
import {FilteredData , AllData} from "../../types/index"

//  import { selectAllSearchBar, fetchSearchBar, getSearchBarStatus } from '../../features/searchbar/searchbarSlice'
//  import { selectAllAccordian, fetchAccordian, getAccordianStatus } from '../../features/accordian/accordianSlice'
//  import { selectAllProducts, fetchProducts, getProductsStatus} from "../../features/products/productSlice";
//  import { selectAllSelectBar, fetchSelectData , getSelectBarStatus} from "../../features/products/selectbarSlice";
//  import { useAppSelector, useAppDispatch } from '../../app/store';

export const getServerSideProps = async () => {
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
      }
    }

  } catch (e) {
    console.error(e)
  }
}

export default function Specials(props: InferGetServerSidePropsType<typeof getServerSideProps> ) {

  const {product, accordian,searchresults,selectresults } : AllData = props.allData;

  const [productData, setProductData] = useState<FilteredData[]>([])
  const [OrderDir, setOrderByDir] = useState<string>('asc')
  const [OrderByVal, setOrderByVal] = useState<string>('all')
  const [visibility, setVisibility] = useState<boolean>(false)

 // const dispatch  = useAppDispatch();
  // // get Products
  // const productItems = useAppSelector(selectAllProducts);
  // const productItemsStatus = useAppSelector(getProductsStatus);
  // //const productItemsError = useAppSelector(getProductsError);

  // // acoordian data
  // const accordianItems = useAppSelector(selectAllAccordian);
  // const accordianDataStatus = useAppSelector(getAccordianStatus);
  // //const accordianDataError = useAppSelector(getAccordianError);

  // // searchbar data
  // const searchbarItems = useAppSelector(selectAllSearchBar);
  // const searchbarDataStatus = useAppSelector(getSearchBarStatus);
  // //const searchbarDataError = useAppSelector(getSearchBarError);

  // // selectbar data
  // const selectbarItems = useAppSelector(selectAllSelectBar);
  // const selectbarDataStatus = useAppSelector(getSelectBarStatus);
  // //const selectbarDataError = useAppSelector(getSelectBarError);

  // useEffect(() => {
  //   if (productItemsStatus === 'idle') {
  //       dispatch(fetchProducts())
  //   }
  // }, [productItemsStatus,dispatch])

  // useEffect(() => {
  //   if(accordianDataStatus === 'idle'){
  //     dispatch(fetchAccordian())
  //   }
  // }, [accordianDataStatus,dispatch])

  // useEffect(() => {
  //   if(searchbarDataStatus === 'idle'){
  //     dispatch(fetchSearchBar())
  //   }
  // }, [searchbarDataStatus ,dispatch])

    // useEffect(() => {
  //   if(selectbarDataStatus === 'idle'){
  //     dispatch(fetchSelectData())
  //   }
  // }, [selectbarDataStatus ,dispatch])

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const {products: newproducts} = productItems as any

  useEffect(() => {
    // Update products state
    setProductData(product)
  },[product]);

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const {accordian: newaccordian} = accordianItems as any

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const {searchresults: newsearchresults} = searchbarItems as any

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const {selectresults: newselectresults} = searchbarItems as any

  // console.log(newaccordian, newproducts, newsearchresults, newselectresults)

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
        item.gender === value

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

