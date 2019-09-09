import React from "react";
//images
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
import "../js/paging";

class AllProducts extends React.Component {
  render() {
    return (
      <main id="content" className="clearfix">
        
        <SearchBar labelname="All Products" />

        <aside id="left_bar">
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">
          <form
            action=""
            method="get"
            //encType="application/x-www-form-urlencoded"
          >
            <section id="results">

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />

                <ProductBoxes />
                       
             </section>
            <br />

            <div className="pag_buttons">
              <input
                type="submit"
                value="submit"
                onclick="alert('Hey, this is just a sample!'); return false;"
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
