import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import NewProductBoxes from '../../components/newProduct/newProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import {
  selectAllProducts,
  fetchProducts,
  getProductsStatus,
} from '../../features/products/productSlice'
import {
  selectAllAccordian,
  fetchAccordian,
  getAccordianStatus,
} from '../../features/accordian/accordianSlice'
import {
  getSearchData,
  fetchSearchData,
  getSearchBarStatus,
} from '../../features/searchdata/searchdataSlice'
import { useAppSelector, useAppDispatch } from '../../app/store'
import { ProductType } from '../../types'
import 'bootstrap/dist/css/bootstrap.min.css'

const NewProducts = () => {
  const dispatch = useAppDispatch()

  const [productData, setProductData] = useState<ProductType[]>([])
  // get Products
  const productItems = useAppSelector(selectAllProducts)
  const productItemsStatus = useAppSelector(getProductsStatus)
  //const productItemsError = useAppSelector(getProductsError);

  // acoordian data
  const accordianItems = useAppSelector(selectAllAccordian)
  const accordianDataStatus = useAppSelector(getAccordianStatus)
  //const accordianDataError = useAppSelector(getAccordianError);

  // searchbar data
  const searchbarItems = useAppSelector(getSearchData)
  const searchbarDataStatus = useAppSelector(getSearchBarStatus)
  //const searchbarDataError = useAppSelector(getAccordianError);

  useEffect(() => {
    if (productItemsStatus === 'idle') {
      dispatch(fetchProducts())
    }
    setProductData(productItems)
  }, [productItemsStatus, productItems, dispatch])

  useEffect(() => {
    if (accordianDataStatus === 'idle') {
      dispatch(fetchAccordian())
    }
  }, [accordianDataStatus, dispatch])

  useEffect(() => {
    if (searchbarDataStatus === 'idle') {
      dispatch(fetchSearchData())
    }
  }, [searchbarDataStatus, dispatch])

  const [visibility, setVisibility] = useState<boolean>(false)

  const sidebarVisibility = (e: { preventDefault: () => void }): void => {
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
          {searchbarItems !== undefined ? (
            <SearchBar labelname="New Products" searchData={searchbarItems} />
          ) : (
            <div>No results</div>
          )}

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
            <AccordianMenu accordianData={accordianItems} />
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

export default NewProducts
