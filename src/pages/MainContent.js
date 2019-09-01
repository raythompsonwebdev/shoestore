import React from "react"
//images
import banner from "../images/banner-image.png"
import kids from "../images/kids-trainer.png"
import furlined from "../images/fur-lined-hiking-boot.png"
import basketball from "../images/basket-ball-shoe.png"
import cartImg from "../images/shoppingcart.gif"
//components
import ProductBox from "../components/productBox"
import FindShoesAccord from "../components/FindShoesAccord"
import FindShoes from "../components/FindShoes"
//import productData from "../data/productData"


class MainContent extends React.Component {

  //const resultProduct = productData.map( product => 

  //  <ProductBox key={product.id} product={product}/>

 //)
  render(){
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
              <a href="index.html" title="Womens's Shoes">Women's Shoes</a>
              <a href="index.html" title="Men's Shoes">Men's Shoes</a>
              <a href="index.html" title="Kids's Shoes">Kid's Shoes</a>
              <a href="index.html" title="Bags">Bags</a>
              <a href="index.html" title="Accessories">Accessories</a>
          </nav>

          </section>

          <h1>Featured</h1>

          <div className="product_boxes">

            {/*resultProduct*/}
            <ProductBox
              name="Trainers"
              imgUrl={kids}
              price="50.00"
              CartImgUrl={cartImg}
            />

            <ProductBox
              name="Boots"
              imgUrl={furlined}
              price="80.00"
              CartImgUrl={cartImg}
            />
            <ProductBox
              name="Skate Shoes"
              imgUrl={basketball}
              price="90.00"
              CartImgUrl={cartImg}
            />
            <ProductBox
              name="Boots"
              imgUrl={furlined}
              price="80.00"
              CartImgUrl={cartImg}
            />

          </div>

          <div className="product_boxes">
            <ProductBox
              name="Trainers"
              imgUrl={kids}
              price="50.00"
              CartImgUrl={cartImg}
            />

            <ProductBox
              name="Boots"
              imgUrl={furlined}
              price="80.00"
              CartImgUrl={cartImg}
            />
            <ProductBox
              name="Skate Shoes"
              imgUrl={basketball}
              price="90.00"
              CartImgUrl={cartImg}
            />
            <ProductBox
              name="Boots"
              imgUrl={furlined}
              price="80.00"
              CartImgUrl={cartImg}
            />
          </div>
        
        </main>
      
              
      </main>
    )
  }
}

export default MainContent;
