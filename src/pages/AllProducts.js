import React ,{ Component } from "react";
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
import Selector from "../components/Selector";

class AllProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productdata: [],
      lastIndex : 0,
      orderDir:'asc',
      orderByVal : "all"
    };

    this.changesOrders = this.changesOrders.bind(this);
    this.sidebarVisibility = this.sidebarVisibility.bind(this);
   
  }

  changesOrders(orderbyval, dir ) {
    this.setState({
      orderByVal: orderbyval,
      orderDir: dir
    });
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
      data.shoeId = this.state.lastIndex;
      this.setState({lastIndex:this.state.lastIndex + 1})
      this.setState({
        productdata : productData
      })
    })
    .catch(error => {

      console.log(error)

    })
  }

  render() {

    let filteredApts = this.state.productdata;
    let value = this.state.orderByVal;
            
    filteredApts = filteredApts.filter((item) => {

      if(item.color === value || item.style === value || item.size === value || item.gender === value || item.price === value ){       
        
        return item      

      }else{

        return item[value] 
      }       

    });

    return (
      <main id="content" className="clearfix">
        
        <SearchBar labelname="All Products" />

        <button id="sidebar-toggle-btn" onClick={this.sidebarVisibility}>SIDE</button>

        <aside className={`left_bar ${this.state.visibility ? "is-expanded" : ""}`}>
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">

          <Selector
            orderByVal={this.state.orderByVal}
            orderDir={this.state.orderDir}
            changesOrders={this.changesOrders}  
          />


          <form
            action=""
            method="get"
            
          >
            <section id="results">
              
              <ProductBoxes productdata={filteredApts} />
                        
            </section>
            <br />

            
          </form>
        </main>
      </main>
    );
  }
}

export default AllProducts;
