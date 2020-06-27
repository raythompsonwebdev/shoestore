import React ,{ Component } from "react";
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
//import $ from "jquery";

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productdata: [],
      lastIndex : 0
    };

    this.sidebarVisibility = this.sidebarVisibility.bind(this);
   
  }

  sidebarVisibility(e) {
    e.preventDefault();      
      this.setState({ visibility: !this.state.visibility});
  }

  componentDidMount() {

    fetch('./productdata.json')
    .then(response => response.json())
    .then(data => {
      const productData = data.map( shoe => {return shoe;})
      // data.shoeId = this.state.lastIndex;
      // this.setState({lastIndex:this.state.lastIndex + 1})
      this.setState({
        productdata : productData
      })
    })
    .catch(error => {

      console.log(error)

    })
  }

  render() {
    return (
      <main id="content" className="clearfix">
        
        <SearchBar labelname="All Products" />

        <button id="sidebar-toggle-btn" onClick={this.sidebarVisibility}>SIDE</button>

        <aside className={`left_bar ${this.state.visibility ? "is-expanded" : ""}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <form
            action=""
            method="get"
            //encType="application/x-www-form-urlencoded"
          >
            <section id="results">
              
              <ProductBoxes productdata={this.state.productdata} />
                        
            </section>
            <br />

            <div className="pag_buttons">
              <input
                type="submit"
                value="submit"
                //onClick="alert('Hey, this is just a sample!'); return false;"
              />
              &nbsp;
              <input type="reset" value="reset" name="reset" />
            </div>
          </form>
        </main>
      </main>
    );
  }
}

export default AllProducts;
