import React from "react";
import BannerImg from "../components/BannerImg";
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/FindShoes";
import productData from "../data/productData";

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
    // change code above this line
  }


  // change code below this line
  sidebarVisibility(e) {
    e.preventDefault();      
      this.setState({ visibility: !this.state.visibility});
  }

  render() {
    return (
      <main id="content" className="clearfix">
        <button id="side-bar-toggle-btn" onClick={this.sidebarVisibility}>SIDE</button>
        <aside className={`left_bar ${this.state.visibility ? "is-expanded" : ""}`}>
          <FindShoes />
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">

          <BannerImg />

          <h1>Featured</h1>

          <ProductBoxes productsdata={productData} />

          <ProductBoxes productsdata={productData} />
        </main>
      </main>
    );
  }
}

export default MainContent;
