// @flow
import React, { Component } from 'react';
import BannerImg from '../components/frontPage/BannerImg';
import FindShoesAccord from '../components/FindShoesAccord';
import FindShoes from '../components/frontPage/FindShoes';
import FrontPageBoxes from '../components/frontPage/frontPageBoxes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdata: [],
      visibility: false,
      lastIndex: 0,
    };

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

  sidebarVisibility(e) {
    e.preventDefault();
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    const {
      visibility,
      productdata,
    } = this.state;
    return (
      <main id="content" className="clearfix">
        <button id="sidebar-toggle-btn" type="button" onClick={this.sidebarVisibility}>
          SIDE
        </button>

        <aside
          className={`left_bar ${visibility ? 'is-expanded' : ' '}`}
        >
          <FindShoes />
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <BannerImg />

          <h1>Featured</h1>

          <FrontPageBoxes productdata={productdata} />
        </main>
      </main>
    );
  }
}

export default App;
