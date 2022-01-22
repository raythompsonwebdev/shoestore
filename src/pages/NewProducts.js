import React, { Component } from "react";
import NewProductBoxes from "../components/newProduct/newProductBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar/SearchBar";

class NewProducts extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      lastIndex: 0,
    };

    this.sidebarVisibility = this.sidebarVisibility.bind(this);
  }

  componentDidMount() {
    // const fetchProducts = fetch(`/api/data/`);
    const fetchProducts = fetch(`./productdata.json`);
    // const { lastIndex } = { ...this.state };
    // eslint-disable-next-line no-console
    // console.log(lastIndex);

    fetchProducts
      .then((response) => response.json())
      .then((data) => {
        const productData = data.map((shoe, index) => {
          // eslint-disable-next-line no-param-reassign
          shoe.prodId = index;
          this.setState({ lastIndex: index });

          // eslint-disable-next-line no-console
          // console.log(lastIndex + 1);

          return shoe;
        });
        this.setState({
          productData,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  sidebarVisibility(e) {
    e.preventDefault();
    const { visibility } = { ...this.state };
    this.setState({ visibility: !visibility });
  }

  render() {
    const { visibility, productData } = { ...this.state };

    return (
      <main id="content" className="clearfix">
        <SearchBar labelname="New Product" />

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

        <main id="content_section">
          <NewProductBoxes productData={productData} />

          <br />
          <br />
        </main>
      </main>
    );
  }
}

export default NewProducts;
