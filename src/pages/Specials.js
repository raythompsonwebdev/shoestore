import React, { Component } from "react";
import ProductBoxes from "../components/Product/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchSelect from "../components/SearchSelect/SearchSelect";

class Specials extends Component {
  constructor() {
    super();

    this.state = {
      productData: [],
      orderDir: "asc",
      orderByVal: "all",
      lastIndex: 0,
      visibility: false,
    };

    this.changesOrders = this.changesOrders.bind(this);
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
  }

  componentDidMount() {
    ///api/get-data
    //fetch("./productdata.json")
    fetch("./api/get-data")
      .then((response) => response.json())
      .then((data) => {
        const productData = data.map((shoe) => {
          shoe.prodId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return shoe;
        });
        this.setState({
          productData: productData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changesOrders(orderbyval, dir) {
    this.setState({
      orderByVal: orderbyval,
      orderDir: dir,
    });
  }

  sidebarVisibility(e) {
    e.preventDefault();
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    const { visibility, orderByVal, orderDir, productData } = this.state;

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
          labelname="Specials"
          changesOrders={this.changesOrders}
          value={value}
        />

        <button
          id="sidebar-toggle-btn"
          type="button"
          onClick={this.sidebarVisibility}
        >
          SIDE
        </button>

        <aside className={`left_bar ${visibility ? "is-expanded" : " "}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" role="main">
          <SearchSelect
            orderByVal={orderByVal}
            orderDir={orderDir}
            changesOrders={this.changesOrders}
          />
          <br />

          <ProductBoxes productData={filteredApts} />

          <br />
        </main>
      </main>
    );
  }
}

export default Specials;
