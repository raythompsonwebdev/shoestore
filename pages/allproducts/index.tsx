import 'bootstrap/dist/css/bootstrap.min.css'
import { SetStateAction, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'
import AllProductBoxes from '../../components/allproducts/allProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
import SearchSelect from '../../components/searchSelect/SearchSelect'
import { selectAllProducts, fetchProducts, getProductsStatus} from "../../features/products/productSlice";
import { selectAllAccordian, fetchAccordian, getAccordianStatus } from '../../features/accordian/accordianSlice'
import { selectAllSearchBar, fetchSearchBarData , getSearchBarStatus } from '../../features/searchbar/searchbarSlice'
import { selectAllSelectBar, fetchSelectData , getSelectBarStatus} from "../../features/selectbar/selectbarSlice";
import { useAppSelector, useAppDispatch } from '../../app/store';
import {FilteredData} from "../../types/index"

// type AllData = {
//   product: [];
//   accordian: [];
//   searchresults :[];
//   selectresults: [];
// }

const Allproducts = () => {

  const [productData, setProductData] = useState<FilteredData[]>([])
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
  const searchbarItems = useAppSelector(selectAllSearchBar);
  const searchbarDataStatus = useAppSelector(getSearchBarStatus);
  //const searchbarDataError = useAppSelector(getSearchBarError);

  // selectbar data
  const selectbarItems = useAppSelector(selectAllSelectBar);
  const selectbarDataStatus = useAppSelector(getSelectBarStatus);
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
      dispatch(fetchSearchBarData())
    }
  }, [searchbarDataStatus ,dispatch])

  useEffect(() => {
    if(selectbarDataStatus === 'idle'){
      dispatch(fetchSelectData())
    }
  }, [selectbarDataStatus ,dispatch])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {products: newproducts} = productItems as any

  useEffect(() => {
    // Update products state
  //   setProductData(product)
  // },[product]);
  setProductData(newproducts)
},[newproducts]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {accordian: newaccordian} = accordianItems as any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {searchresults} = searchbarItems as any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {selectresults} = selectbarItems as any


  console.log(newaccordian, newproducts, searchbarItems, selectbarItems)

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
          {/* <SearchBar labelname="All Products" searchData={searchresults} /> */}
          <SearchBar labelname="All Products" searchData={searchresults} />

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
            {/* <AccordianMenu accordianData={accordian} /> */}
            <AccordianMenu accordianData={newaccordian} />
          </aside>

          <main id="right-content-section" className="group">
            <SearchSelect
              orderByVal={OrderByVal}
              orderDir={orderDir}
              changesOrders={changesOrders}
              handleChange={handleChange}
              // selectBarData={selectresults}
              selectBarData={selectresults}
            />
            <AllProductBoxes productData={filteredApts} />
          </main>
        </main>
      </>
    </Layout>
  )
}


export default Allproducts;
