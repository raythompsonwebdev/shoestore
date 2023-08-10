import { SetStateAction, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AllProductBoxes from '../../components/allproducts/allProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
import {ProductType} from "../../types/index"
import { selectAllProducts, fetchProducts, getProductsStatus} from "../../features/products/productSlice";
import { selectAllAccordian, fetchAccordian, getAccordianStatus } from '../../features/accordian/accordianSlice'
import { getSearchData, fetchSearchData , getSearchBarStatus } from '../../features/searchdata/searchdataSlice'
import { getSelectData, fetchSelectData , getSelectDataStatus} from "../../features/selectdata/selectdataSlice";
import { useAppSelector, useAppDispatch } from '../../app/store';
import 'bootstrap/dist/css/bootstrap.min.css'

const Allproducts = () => {

  const [productData, setProductData] = useState<ProductType[]>([])
  const [orderDir, setOrderByDir] = useState<string>('asc')
  const [OrderByVal, setOrderByVal] = useState<string>('all')
  const [visibility, setVisibility] = useState<boolean>(false)

  const dispatch  = useAppDispatch();
  // get Products
  const productItems = useAppSelector(selectAllProducts);
  const productItemsStatus = useAppSelector(getProductsStatus);
  //const productItemsError = useAppSelector(getProductsError);

  // acoordian data
  const accordianItems = useAppSelector(selectAllAccordian);
  const accordianDataStatus = useAppSelector(getAccordianStatus);
  //const accordianDataError = useAppSelector(getAccordianError);

  // searchbar data
  const searchbarItems = useAppSelector(getSearchData);
  const searchbarDataStatus = useAppSelector(getSearchBarStatus);
  //const searchbarDataError = useAppSelector(getSearchBarError);

  // selectbar data
  const selectbarItems = useAppSelector(getSelectData);
  const selectbarDataStatus = useAppSelector(getSelectDataStatus);
  //const selectbarDataError = useAppSelector(getSelectBarError);

  useEffect(() => {
    if (productItemsStatus === 'idle') {
        dispatch(fetchProducts())
    }
  }, [productItemsStatus,dispatch])

  useEffect(() => {
    if(accordianDataStatus === 'idle'){
      dispatch(fetchAccordian())
    }
  }, [accordianDataStatus,dispatch])

  useEffect(() => {
    if(searchbarDataStatus === 'idle'){
      dispatch(fetchSearchData())
    }
  }, [searchbarDataStatus ,dispatch])

  useEffect(() => {
    if(selectbarDataStatus === 'idle'){
      dispatch(fetchSelectData())
    }
  }, [selectbarDataStatus ,dispatch])


  useEffect(() => {
    if(productItemsStatus === 'succeeded'){
      setProductData(productItems)
    }
  },[productItems, productItemsStatus]);

  console.log(searchbarItems)


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {selectresults} = selectbarItems as any

  //console.log(newaccordian, newproducts, searchbarItems, selectbarItems)

  const handleChange = (selectedSize: SetStateAction<string>) :void => {
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

  filteredApts = filteredApts.filter(
    (item) => {
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
          <title>All Products</title>
          <meta name="description" content="All Products" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main id="main-content" className="clearfix">

        {searchbarItems !== undefined ?  <SearchBar labelname="All Products" searchData={searchbarItems} /> : <div>No results</div>}

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

          <main id="right-content-section" className="group">
            { selectresults !== undefined ? <SearchSelect
              orderByVal={OrderByVal}
              orderDir={orderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              selectBarData={selectresults}
            /> : <div> No results </div>}
            <AllProductBoxes productData={filteredApts} />
          </main>
        </main>
      </>
    </Layout>
  )
}


export default Allproducts;
