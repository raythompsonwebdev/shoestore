import React from "react";
//images

import FindShoesAccord from "../components/FindShoesAccord";
import "../js/paging";
import kids from "../images/kids-trainer.png";
import furlined from "../images/fur-lined-hiking-boot.png";
import basketball from "../images/basket-ball-shoe.png";
import cartImg from "../images/shoppingcart.gif";


class AllProducts extends React.Component {
  render() {
    return (
      <main id="content" className="clearfix">
         
        <aside id="searchbar">
          <form id="searcher2" action="" method="get">
            <label>All Products</label>
            <select name="gender">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Women">Children</option>
            </select>
            <select name="style">
              <option value="Athletics">Athletics</option>
              <option value="Fashion">Fashion</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Sandals">Sandals</option>
              <option value="Work">Work</option>
            </select>
            <select name="size">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <select name="color">
              <option value="Red">Red</option>
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="White">White</option>
            </select>
            <button name="find" className="find2" type="submit">
              Go
            </button>
          </form>
        </aside>

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
              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boots</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-lined Boot</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boot</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="product_icon"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>
              </div>

              <div className="product_boxes">
                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={kids}
                    alt="kids-trainer"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Kids Trainer</span>
                    <span className="price">&pound;80.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={basketball}
                    alt="basket-ball-shoe"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Basketball Shoe</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-ladies-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Fur-Lined Boots</span>
                    <span className="price">&pound;120.00</span>
                  </figcaption>
                </figure>

                <figure className="product_box">
                  <img
                    className="product_boximg"
                    src={furlined}
                    alt="fur-lined-hiking-boot"
                  />
                  <figcaption className="product_boxdetails">
                    <img
                      className="product_icon"
                      src={cartImg}
                      alt="shopping-cart"
                    />
                    <span className="price">Hiking Boots</span>
                    <span className="price">&pound;100.00</span>
                  </figcaption>
                </figure>
              </div>
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
