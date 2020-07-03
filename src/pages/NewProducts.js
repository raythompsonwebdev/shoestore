import React, {Component} from "react";
import NewProductBoxes from "../components/newProductBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";

class NewProducts extends Component {

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

  componentDidMount(){
    
    fetch('./productdata.json')
    .then(response => response.json())
    .then(data => {
      const productData = data.map( shoe => {return shoe;})
      data.shoeId = this.state.lastIndex;
      this.setState({lastIndex:this.state.lastIndex + 1})
      this.setState({ productdata : productData })
    })
    .catch(error => {
      console.log(error)
    })    
  }

  render() {
    return (
      <main id="content" className="clearfix">
        <SearchBar labelname="New Product" />

        <button id="sidebar-toggle-btn" onClick={this.sidebarVisibility}>SIDE</button>

        <aside className={`left_bar ${this.state.visibility ? "is-expanded" : ""}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section">
          <form
            action=""
            method="get"
            
          >
            <section id="results">
              <NewProductBoxes productdata={this.state.productdata} />
            </section>

            <br />
            
          </form>
          <br />
          <br />
        </main>
      </main>
    );
  }
}

export default NewProducts;
