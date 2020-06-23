import React, { Component } from 'react';
import BannerImg from "../components/BannerImg";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/FindShoes";
import FrontPageBoxes from "../components/frontPageBoxes";
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      productdata: [],      
      visibility: false,
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

  render(){

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

          <FrontPageBoxes productdata={this.state.productdata} />          

        </main>
      </main>
    );
  }
}

export default App;
