import React from "react";
//images
import banner from "../images/banner-image.png";
//components
import ProductBoxes from "../components/productBoxes";
import FindShoesAccord from "../components/FindShoesAccord";
import FindShoes from "../components/FindShoes";
//import productData from "../data/productData"

class MainContent extends React.Component {
  
  render() {
    return (
      <main id="content" className="clearfix">
        <aside id="left_bar">
          <FindShoes />
          <FindShoesAccord />
        </aside>

        <main id="content_section" className="group">

          <section id="bannerbox">
            
            <br />

            <hgroup>
              <h1>LORUM IPSUN DOLOR AMET </h1>
              <h2>ipsum vel voluptate perspiciatis, quis</h2>
            </hgroup>

            <figure id="bannerboximg">
              <img src={banner} alt="bannerimage" />
            </figure>

            <nav id="apDiv1">
              
              <a href="index.html" title="Womens's Shoes">
                Women's Shoes
              </a>
              <a href="index.html" title="Men's Shoes">
                Men's Shoes
              </a>
              <a href="index.html" title="Kids's Shoes">
                Kid's Shoes
              </a>
              <a href="index.html" title="Bags">
                Bags
              </a>
              <a href="index.html" title="Accessories">
                Accessories
              </a>
            </nav>

          </section>

          <h1>Featured</h1>

          <ProductBoxes />

          <ProductBoxes />


        </main>
      </main>
    );
  }
}

export default MainContent;
