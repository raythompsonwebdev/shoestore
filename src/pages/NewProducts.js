import React, { Component } from 'react';
import NewProductBoxes from '../components/newProduct/newProductBoxes';
//import FindShoesAccord from '../components/FindShoesAccord';
import SearchBar from '../components/SearchBar/SearchBar';

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

    const fetchProducts = fetch(`/api/data/`);

      fetchProducts.then((response) => response.json())
      .then((data) => {
        const productData = data.map((shoe) => {
          shoe.prodId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return shoe;
        });
        this.setState({
          productData,
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
    const { visibility, productData } = this.state;

    return (
      <main id="content" className="clearfix">
        <SearchBar labelname="New Product" />

        <button
          id="sidebar-toggle-btn"
          type="button"
          onClick={this.sidebarVisibility}
        >
          SIDE
        </button>

        <aside className={`left_bar ${visibility ? 'is-expanded' : ' '}`}>
          {/* <FindShoesAccord /> */}
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
