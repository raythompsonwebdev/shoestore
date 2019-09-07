import React from "react";
//images

import FindShoesAccord from "../components/FindShoesAccord";
import SearchBar from "../components/SearchBar";

import kids from "../images/kids-trainer.png";
import furlined from "../images/fur-lined-hiking-boot.png";
import basketball from "../images/basket-ball-shoe.png";
import cartImg from "../images/shoppingcart.gif";

//import productData from "../data/productData"

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
            <section id="results">
              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 001</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 002</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 003</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={kids}
                    alt="kidss-trainer"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 004</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 005</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 006</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 006</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 007</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 007</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 008</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 008</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes_longer">
                <figure className="product-box_longer">
                  <img
                    className="product_boximg_longer"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails_longer">
                    <h1>Product 008</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reiciendis nobis eius error, animi iusto est voluptates,
                      ipsa autem asperiores culpa. Autem dolor similique
                      accusamus praesentium quas expedita quos ratione
                      quibusdam.
                    </p>
                    <span className="price_longer">Price :$30.00</span>
                    <span className="price_longer">
                      <img
                        className="product_icon_longer"
                        src={cartImg}
                        alt="shopping-cart"
                      />
                      Add to Cart
                    </span>
                  </figcaption>
                </figure>
              </div>
            </section>

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
