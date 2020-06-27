import React, {Component} from "react";
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
//import $ from "jquery";

class Specials extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productdata: [],
      lastIndex : 0,
      orderBy:'id',
      orderDir:'asc'
      
    };
    this.changeOrder = this.changeOrder.bind(this);
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
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

    let order;
    let filteredApts = this.state.productdata;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredApts = filteredApts.sort((a, b) => {
      
        if (
          a[this.state.orderBy] < b[this.state.orderBy]
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })

    return (
      <main id="content" className="clearfix">

        <SearchBar 
          labelname="Specials"
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
           
        />

        <button id="sidebar-toggle-btn" onClick={this.sidebarVisibility}>SIDE</button>

        <aside className={`left_bar ${this.state.visibility ? "is-expanded" : ""}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" role="main">
          <form
            action=""
            method="get"
            //encType="application/x-www-form-urlencoded"
          >
            <section id="results">
              
              <ProductBoxes 
                productdata={filteredApts}
                                                
              />                        
              
            </section>

            <br />

            <div className="pag_buttons">
              <input type="submit" value="submit" />
              &nbsp;
              <input type="reset" value="reset" name="reset" />
            </div>
          
          </form>

        </main>
      </main>
    );
  }
}

export default Specials;
