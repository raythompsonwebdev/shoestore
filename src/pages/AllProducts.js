import React, { Component } from "react";
import ProductBoxes from "../components/Product/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchSelect from "../components/SearchSelect/SearchSelect";

class AllProducts extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      orderDir: "asc",
      orderByVal: "all",
      lastIndex: 0,
      visibility: false,
      searchData: [],
      selectData: [],
    };

    this.changesOrders = this.changesOrders.bind(this);
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // const fetchProducts = fetch(`/api/products/`);
    // const fetchProducts = fetch(`./productdata.json`);

    // get products
    const getProducts = fetch("/api/products");

    // get search bar options data
    const getSearchData = fetch("/api/searchbardata");

    // get select bar options data
    const getSelectData = fetch("/api/selectdata");

    // Use promise all to get data for both apis
    // promise all accepts array.
    Promise.all([getProducts, getSearchData, getSelectData])
      .then((values) =>
        // convert returned promises to json data by passing promises (which are arrays) into promise.all again and looping over arrays and apply .json() to each element of the array then return an array as json data.
        Promise.all(values.map((element) => element.json()))
      )
      .then(([productdata, searchData, selectData]) => {
        // deconstruct array of data from both apis responses.
        // eslint-disable-next-line no-console
        // console.log(productdata, searchData, selectData);
        const productData = productdata.map((shoe, index) => {
          // eslint-disable-next-line react/destructuring-assignment
          // eslint-disable-next-line no-param-reassign
          shoe.prodId = index;
          this.setState({ lastIndex: index });

          return shoe;
        });
        this.setState({
          productData,
        });
        this.setState({
          searchData,
        });
        this.setState({
          selectData,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        throw new Error("something went wrong");
      });
  }

  handleChange = (selectedSize) => {
    this.setState({
      orderByVal: selectedSize,
      orderDir: "asc",
    });
  };

  sidebarVisibility = (e) => {
    e.preventDefault();
    const { visibility } = { ...this.state };
    this.setState({ visibility: !visibility });
  };

  changesOrders = (orderbyval, dir) => {
    this.setState({
      orderByVal: orderbyval,
      orderDir: dir,
    });
  };

  render() {
    const {
      productData,
      orderDir,
      orderByVal,
      visibility,
      searchData,
      selectData,
    } = {
      ...this.state,
    };
    let filteredApts = productData;
    const value = orderByVal;

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
      <main id="content" className="clearfix">
        <SearchBar
          labelname="All Products"
          orderByVal={orderByVal}
          orderDir={orderDir}
          changesOrders={this.changesOrders}
          handleChange={this.handleChange}
          searchData={searchData}
        />

        <button
          id="sidebar-toggle-btn"
          type="button"
          onClick={this.sidebarVisibility}
          aria-label="secondary menu toggle button"
        >
          SIDE
        </button>

        <aside className={`left_bar ${visibility ? "is-expanded" : " "}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <SearchSelect
            orderByVal={orderByVal}
            orderDir={orderDir}
            changesOrders={this.changesOrders}
            handleChange={this.handleChange}
            selectData={selectData}
          />
          <ProductBoxes productData={filteredApts} />
        </main>
      </main>
    );
  }
}

export default AllProducts;
