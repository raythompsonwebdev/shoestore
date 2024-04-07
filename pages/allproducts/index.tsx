import { SetStateAction, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AllProductBoxes from '../../components/allproducts/allProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
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
import {
  getSelectData,
  fetchSelectData,
  getSelectDataStatus,
} from '../../features/selectdata/selectdataSlice'
import { useSelector, useDispatch } from '../../features/store'

const Allproducts = () => {
  const [orderDir, setOrderByDir] = useState<string>('asc')
  const [OrderByVal, setOrderByVal] = useState<string>('all')
  const [visibility, setVisibility] = useState<boolean>(false)

  const dispatch = useDispatch()
  // get Products
  const productData = useSelector(selectAllProducts)
  const productItemsStatus = useSelector(getProductsStatus)
  //const productItemsError = useAppSelector(getProductsError);

  // acoordian data
  const accordianData = useSelector(selectAllAccordian)
  const accordianDataStatus = useSelector(getAccordianStatus)
  //const accordianDataError = useAppSelector(getAccordianError);

  // searchbar data
  const searchData = useSelector(getSearchData)
  const searchbarDataStatus = useSelector(getSearchBarStatus)
  //const searchbarDataError = useAppSelector(getSearchBarError);

  // selectbar data
  const selectData = useSelector(getSelectData)
  const selectbarDataStatus = useSelector(getSelectDataStatus)
  //const selectbarDataError = useAppSelector(getSelectBarError);

  useEffect(() => {
    if (productItemsStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productItemsStatus, dispatch])

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

  useEffect(() => {
    if (selectbarDataStatus === 'idle') {
      dispatch(fetchSelectData())
    }
  }, [selectbarDataStatus, dispatch])

  const handleChange = (selectedSize: SetStateAction<string>): void => {
    setOrderByVal(selectedSize)
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

  filteredApts = filteredApts.filter((item) => {
    if (
      item.color === value ||
      item.style === value ||
      item.size === value ||
      item.gender === value
    ) {
      return item
    }
    return item[value]
  })

  return (
    <Layout>
      <>
        <Head>
          <title>All Products</title>
          <meta name="description" content="All Products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">
          <SearchBar labelname="All Products" searchData={searchData} />

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

          <main id="right-content-section" className="group">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={orderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectData}
            />
            <AllProductBoxes productData={filteredApts} />
          </main>
        </main>
      </>
    </Layout>
  )
}

export default Allproducts
