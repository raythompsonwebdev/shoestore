import React from "react";
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";
import productData from "../data/productData";
import $ from "jquery";

class AllProducts extends React.Component {
  componentDidMount() {
    $("#results").before('<nav id="pagination"></nav>');

    var rowsShown = 4;
    var rowsTotal = $("#results div").length;
    var numPages = Math.round(rowsTotal / rowsShown);

    for (let i = 0; i < numPages; i++) {
      var pageNum = i + 1;
      $("#pagination").append(
        '<a href="#" rel="' + i + '">' + pageNum + "</a> "
      );
    }

    $("#results div").hide();
    $("#results div:first").show();
    $("#results div").slice(0, rowsShown).show();

    $("#pagination a:first").addClass("active");

    $("#pagination a").bind("click", function () {
      $("#pagination a").removeClass("active");
      $(this).addClass("active");
      var currPage = $(this).attr("rel");
      var startItem = currPage * rowsShown;
      var endItem = startItem + rowsShown;

      $("#results div")
        .css("opacity", "0.0")
        .hide()
        .slice(startItem, endItem)
        .css("display", "block")
        .animate({ opacity: 1 }, 300, function () {});
    });
  }

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
              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />

              <ProductBoxes productsdata={productData} />
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
