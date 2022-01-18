// @flow
import React, { Component } from "react";
import BannerImg from "../components/frontPage/BannerImg";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/frontPage/FindShoes";
import FrontPageBoxes from "../components/frontPage/frontPageBoxes";
// import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: [],
      visibility: false,
      lastIndex: 0,
    };

    this.sidebarVisibility = this.sidebarVisibility.bind(this);
  }

  componentDidMount() {
    // const fetchProducts = fetch(`/api/data/`);
    const fetchProducts = fetch(`./productdata.json`);

    fetchProducts
      .then((response) => {
        if (!response.ok) {
          throw new Error("no data provided");
        }
        return response.json();
      })
      .then((data) => {
        const { lastIndex } = { ...this.state };
        const productData = data.map((shoe) => {
          // eslint-disable-next-line no-param-reassign
          shoe.prodId = lastIndex;
          this.setState({ lastIndex: lastIndex + 1 });
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
        <button
          id="sidebar-toggle-btn"
          type="button"
          onClick={this.sidebarVisibility}
        >
          SIDE
        </button>

        <aside className={`left_bar ${visibility ? "is-expanded" : " "}`}>
          <FindShoes />
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <BannerImg />

          <h1>Featured</h1>

          <FrontPageBoxes productData={productData} />
        </main>
      </main>
    );
  }
}

export default App;
