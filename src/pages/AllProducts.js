import React, { Component } from 'react';
import ProductBoxes from '../components/productBoxes';
import FindShoesAccord from '../components/FindShoesAccord';
import SearchBar from '../components/SearchBar';
import Selector from '../components/Selector';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdata: [],
      orderDir: 'asc',
      orderByVal: 'all',
      lastIndex: 0,
    };

    this.changesOrders = this.changesOrders.bind(this);
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
  }

  componentDidMount() {
    fetch('./productdata.json')
      .then((response) => response.json())
      .then((data) => {
        const productData = data.map((shoe) => {
          shoe.prodId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return shoe;
        });
        this.setState({
          productdata: productData,
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
    const {
      visibility, orderByVal, orderDir, productdata,
    } = this.state;
    let filteredApts = productdata;
    const value = orderByVal;

    filteredApts = filteredApts.filter((item) => {
      if (
        item.color === value
        || item.style === value
        || item.size === value
        || item.gender === value
        || item.price === value
      ) {
        return item;
      }
      return item[value];
    });

    return (
      <main id="content" className="clearfix">
        <SearchBar labelname="All Products" />

        <button id="sidebar-toggle-btn" type="button" onClick={this.sidebarVisibility}>
          SIDE
        </button>

        <aside className={`left_bar ${visibility ? 'is-expanded' : ' '}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <Selector
            orderByVal={orderByVal}
            orderDir={orderDir}
            changesOrders={this.changesOrders}
          />
          <ProductBoxes productdata={filteredApts} />
        </main>
      </main>
    );
  }
}

export default AllProducts;
