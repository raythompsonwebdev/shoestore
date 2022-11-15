import React, { useState, useEffect } from "react";
import ProductBoxes from "../components/Product/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchSelect from "../components/SearchSelect/SearchSelect";

function AllProducts() {
  const [productData, setProductData] = useState([]);
  const [orderDir, setOrderByDir] = useState("asc");
  const [OrderByVal, setOrderByVal] = useState("all");
  const [lastIndex, setLastIndex] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    // get products
    const getProducts = fetch("/api/products");

    // get search bar options data
    const getSearchData = fetch("/api/searchbardata");

    // get select bar options data
    const getSelectData = fetch("/api/selectdata");

    // Use promise all to get data for threee apis
    Promise.all([getProducts, getSearchData, getSelectData])
      .then((values) =>
        // map over array of arrays of data.
        Promise.all(values.map((element) => element.json()))
      )
      .then(([productdata, searchedData, selectedData]) => {
        const productDataResult = productdata.map((shoe, index) => {
          setLastIndex(index);
          // eslint-disable-next-line no-param-reassign
          shoe.prodId = index;
          return shoe;
        });
        setProductData(productDataResult);
        setSearchData(searchedData);
        setSelectData(selectedData);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        throw new Error("something went wrong");
      });
  }, [lastIndex]);

  const handleChange = (selectedSize) => {
    setOrderByVal(selectedSize);
    setOrderByDir("asc");
  };

  const sidebarVisibility = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  const changesOrders = (orderbyval, dir) => {
    setOrderByVal(orderbyval);
    setOrderByDir(dir);
  };

  let filteredApts = productData;
  const value = OrderByVal;

  filteredApts = filteredApts.filter((item) => {
    if (
      item.color === value ||
      item.style === value ||
      item.size === value ||
      item.gender === value ||
      item.price === value
    ) {
      return item;
    }
    return item[value];
  });

  return (
    <main id="main-content" className="clearfix">
      <SearchBar
        labelname="All Products"
        orderByVal={OrderByVal}
        orderDir={orderDir}
        changesOrders={changesOrders}
        handleChange={handleChange}
        searchData={searchData}
      />

      <button
        id="sidebar-toggle-btn"
        type="button"
        onClick={sidebarVisibility}
        aria-label="secondary menu toggle button"
      >
        SIDE
      </button>

      <aside
        className={`left-side-content ${visibility ? "is-expanded" : " "}`}
      >
        <FindShoesAccord />
      </aside>

      <main id="right-content-section" className="group">
        <SearchSelect
          orderByVal={OrderByVal}
          orderDir={orderDir}
          changesOrders={changesOrders}
          handleChange={handleChange}
          selectData={selectData}
        />
        <ProductBoxes productData={filteredApts} />
      </main>
    </main>
  );
}

export default AllProducts;
