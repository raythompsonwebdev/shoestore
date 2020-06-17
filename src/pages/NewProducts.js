import React from "react";
//images
import NewProductBoxes from "../components/newProductBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
import NewproductData from "../data/newproductData";


class NewProducts extends React.Component {

  render() {
    return (
      <main id="content" className="clearfix">

        <SearchBar labelname="New Product"/>

        <aside id="left_bar">
          <FindShoesAccord />
        </aside>

        <main id="content_section">
          <form
            action=""
            method="get"
            //encType="application/x-www-form-urlencoded"
          >
            <section id="results"><NewProductBoxes newproducts={NewproductData}/></section>

            <br />
            <div className="clearfix"></div>
            <div className="pag_buttons">
              <input type="submit" value="submit" />
              &nbsp;
              <input type="reset" value="reset" name="reset" />
            </div>
          </form>
          <br />
          <br />
        </main>
      </main>
    );
  }
}

export default NewProducts;
