import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import type { InferGetServerSidePropsType } from 'next'
import clientPromise from '../../lib/mongodb'
import Layout from '../../components/Layout'
import NewProductBoxes from '../../components/newProduct/newProductBoxes'
import AccordianMenu from '../../components/accordianMenu'
import SearchBar from '../../components/searchBar/SearchBar'
 import { selectAllSearchBar, fetchSearchBar, getSearchBarStatus } from '../../features/searchbar/searchbarSlice'
 import { selectAllAccordian, fetchAccordian, getAccordianStatus } from '../../features/accordian/accordianSlice'
 import { selectAllProducts, fetchProducts, getProductsStatus} from "../../features/products/productSlice";
 import { useAppSelector, useAppDispatch } from '../../app/store';


// type NewProductsData = {
//   product: [];
//   accordian: [];
//   searchresults :[];
// }

export default function NewProducts(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

    //const {product, accordian, searchresults} = props.products as HomePageProds;

  //const {product, accordian,searchresults} : NewProductsData = props.newData;


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
  //const accordianDataError = useAppSelector(getAccordianError);

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
      dispatch(fetchSearchBar())
    }
  }, [searchbarDataStatus ,dispatch])


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {products: newproducts} = productItems as any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {accordian: newaccordian} = accordianItems as any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {searchresults: newsearchresults} = searchbarItems as any


  console.log(newaccordian, newproducts, newsearchresults,props)

  // const [productData, setProductData] = useState<[]>([])
  const [productData, setProductData] = useState<[]>([])

  const [visibility, setVisibility] = useState<boolean>(false)

  useEffect(() => {
    // Update products state
    setProductData(newproducts)
  },[newproducts]);


  // useEffect(() => {
  //   // Update products state
  //   setProductData(product)
  // },[product]);

  const sidebarVisibility = (e: { preventDefault: () => void }) :void => {
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
          {/* <SearchBar labelname="New Products" searchData={searchresults} /> */}
          <SearchBar labelname="New Products" searchData={newsearchresults} />

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

          <section id="right-content-section">
            {/* <NewProductBoxes productData={productData} /> */}
            <NewProductBoxes productData={productData} />

            <br />
            <br />
          </section>
        </main>
      </>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  // Call an external DB to get products

  try {
    //await clientPromise
    const client = await clientPromise
    const db = client.db('shoestore')

    const results = await db.collection('products').find({}).toArray()
    const resultstwo = await db.collection('accordianData').find({}).toArray()
    const resultsfour = await db.collection('searchBarData').find({}).toArray()

    if (results.length > 0) {
      console.log(`${results.length} customers found`)
      // Here you could build your html or put the results in some other data structure you want to work with
    } else {
      console.log(`No customers found`)
    }

    const product = JSON.parse(JSON.stringify(results))
    const accordian = JSON.parse(JSON.stringify(resultstwo))
    const searchresults = JSON.parse(JSON.stringify(resultsfour))

    return {
      props:  {
        newData:{ product, accordian, searchresults },
      }
    }

  } catch (e) {
    console.error(e)

  }

}

