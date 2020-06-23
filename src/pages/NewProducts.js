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
    return (
      <main id="content" className="clearfix">
        <SearchBar labelname="New Product" />

        <aside className="left_bar">
          <FindShoesAccord />
        </aside>

        <main id="content_section">
          <form
            action=""
            method="get"
            //encType="application/x-www-form-urlencoded"
          >
            <section id="results">
              <NewProductBoxes productdata={this.state.productdata} />
            </section>

            <br />
            {/* <div className="clearfix"></div>
            <div className="pag_buttons">
              <input type="submit" value="submit" />
              &nbsp;
              <input type="reset" value="reset" name="reset" />
            </div> */}
          </form>
          <br />
          <br />
        </main>
      </main>
    );
  }
}

export default NewProducts;
