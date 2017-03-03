<!DOCTYPE html >
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="minimum-scale=0">
        <meta name="viewport" content="user-scalable=yes">
        <meta name="viewport" content="target-densitydpi=device-dpi">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="shoe store website selling the latest shoes and accessories at affordable prices. " />
        <meta name="keywords" content="Shoes, Boots, Footware, Handbags, Hats, " />
        <meta name="author" content="RayThompsonWebdev" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="copyright" content="&copy;raymondthompson" />

        <title>Shoestore-All-Products-Page</title>

        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="font/font-style.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/custom-theme/jquery-ui-1.10.3.custom.css" />

        <!--[if lt IE 9 ]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <script type="text/javascript" src="js/html5shiv.min.js"></script>
        <script type="text/javascript" src="js/Respond-master/dest/respond.min.js"></script>
        <script type="text/javascript" src="js/selectivizr.min.js"></script>
        <![endif]-->
    </head>

    <body>

        <!--Wrapper Start-->
        <section id="Wrapper">
    <div id="menu-toggle-btn"></div>
            <!--Header-->
            <header>
                <figure id="logo">
                    <img src="images/shoe-store-logo.png" alt="shoe-store-logo" />
                </figure>
            </header>

            <!--Navigation-->
            <nav role="navigation">
                <span><a href="#" alt="">Sign in</a><a href="#" alt="">Login</a><a href="#" alt="">Help</a></span>
                <ul>
                    <li><a href="index.php" title="Home Page">Home</a></li>
                    <li><a href="new_products.php" title="New Product Page">New Products</a></li>
                    <li><a href="specials.php" title="Specials Page">Specials</a></li>
                    <li><a href="all_products.php" title="All Products Page">All Products</a></li>
                    <li><a href="faqs.html" title="FAQ Page">FAQS</a></li>
                    <li><a href="contact_us.php" title="Contact Page">Contact</a></li>
                </ul>
                <ul id="mobile-nav">
                    <li><a href="index.php" title="Home Page">Home</a></li>
                    <li><a href="new_products.php" title="New Product Page">New Products</a></li>
                    <li><a href="specials.php" title="Specials Page">Specials</a></li>
                    <li><a href="all_products.php" title="All Products Page">All Products</a></li>
                    <li><a href="faqs.html" title="FAQ Page">FAQS</a></li>
                    <li><a href="contact_us.php" title="Contact Page">Contact</a></li>
                </ul>
            </nav>
            <!--End of Nav-->

            <!--Search bar-->
            <aside id="searchbar">
                <form id="searcher2" action="" method="get">
                    <label>All Products</label>
                    <select name="gender">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Women">Children</option>
                    </select>
                    <select name="Style" >
                        <option value="Athletics">Athletics</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Sandals">Sandals</option>
                        <option value="Work">Work</option>
                    </select>
                    <select name="Size">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <select name="Color">
                        <option value="Red">Red</option>
                        <option value="Black">Black</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Green">Green</option>
                        <option value="White">White</option>
                    </select>
                    <input name="find" type="submit" value="Go" />
                </form>
            </aside>

            <!--Content-->
            <section id="content" role="main">

                <!--Left bar-->
                <aside id="left_bar" role="complimentary">
                    <nav id="sec_nav" role="navigation">
                        <div id="accordion">
                            <h3>Men&acute;s Shoes</h3>
                            <div>
                                <ul>
                                    <li>Athletics</li>
                                    <li>Boat</li>
                                    <li>Fashion</li>
                                    <li>Formal </li>
                                    <li>Shoes</li>
                                    <li>Lace-Ups</li>
                                    <li>Loafers </li>
                                    <li>Outdoor</li>
                                    <li>Sandals</li>
                                    <li>Slippers</li>
                                    <li>Work </li>
                                    <li></li>
                                </ul>
                            </div>
                            <h3>Women&acute;s  Shoes</h3>
                            <div>
                                <ul>
                                    <li>Athletics</li>
                                    <li>Boat </li>
                                    <li>Fashion</li>
                                    <li>Formal</li>
                                    <li>Shoes</li>
                                    <li>Lace-Ups</li>
                                    <li>Loafers </li>
                                    <li>Outdoor</li>
                                    <li>Sandals</li>
                                    <li>Slippers</li>
                                    <li>Work </li>
                                    <li></li>
                                </ul>
                            </div>
                            <h3>Kid&acute;s Shoes</h3>
                            <div>
                                <ul>
                                    <li>Athletics</li>
                                    <li>Boat</li>
                                    <li>Fashion</li>
                                    <li>Formal </li>
                                    <li>Shoes</li>
                                    <li>Lace-Ups</li>
                                    <li>Loafers </li>
                                    <li>Outdoor</li>
                                    <li>Sandals</li>
                                    <li>Slippers</li>
                                    <li>Work </li>
                                    <li></li>
                                </ul>
                            </div>
                            <h3>Bag&acute;s &amp; Accessories</h3>
                            <div>
                                <ul>
                                    <li>Handbags</li>
                                    <li>Scarfs</li>
                                    <li>Belts</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </aside>

                <section id="content_section"><!--Content_section-->

                    <form action="" method="get" enctype="application/x-www-form-urlencoded">

                        <section id="results">

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->

                                <figure class="product_box" >
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/page1_32.png" width="34" height="51" /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>


                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>



                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                            </div><!--end of product boxes-->


                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>


                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg"  src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg"  src="images/page1_18.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/shoppingcart.gif"  /></figure>
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>
                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>


                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/shoppingcart.gif"  /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boots</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-lined Boot</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/shoppingcart.gif"  /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/page1_32.png" width="34" height="51" /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/page1_32.png" width="34" height="51" /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/page1_18.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/shoppingcart.gif"  /></figure>
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boot</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product box-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <figure class="product_icon"><img src="images/shoppingcart.gif"  /></figure>
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                            <div class="product_boxes"><!--product boxes-->

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/kids-trainer.png" alt="kids-trainer" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Kids Trainer</span>
                                        <span class="price">&pound;80.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/basket-ball-shoe.png" alt="basket-ball-shoe" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Basketball Shoe</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Fur-Lined Boots</span>
                                        <span class="price">&pound;120.00</span>
                                    </figcaption>
                                </figure>

                                <!--product boxes-->
                                <figure class="product_box">
                                    <img class="product_boximg" src="images/fur-lined-hiking-boot.png" alt="fur-lined-hiking-boot" />
                                    <figcaption class="product_boxdetails">
                                        <img class="product_icon"src="images/shoppingcart.gif" alt="shopping-cart" />
                                        <span class="price">Hiking Boots</span>
                                        <span class="price">&pound;100.00</span>
                                    </figcaption>
                                </figure>
                            </div><!--end of product boxes-->

                        </section><!--end of results section-->
                        <br/>

                        <div class="pag_buttons">
                            <input type="submit" value="submit" onclick="alert('Hey, this is just a sample!'); return false;" />&nbsp;
                            <input type="reset" value="reset" name="reset"/>
                        </div>

                    </form>

                </section>

                <div class="clearfix"></div>

                <hr><!--end of content-->

                <footer>
                    <ul class="footer_nav">
                        <li><a href="index.php">Home</a></li>
                        <li><a href="new_products.php">New Products</a></li>
                        <li><a href="specials.php">Specials</a></li>
                        <li><a href="all_products.php">All Products</a></li>
                        <li><a href="faqs.html">FAQS</a></li>
                        <li><a href="contact_us.php">Contact</a></li>
                    </ul>

                </footer><!--end of footer-->

                <div class="clearfix"></div>

                <p class="copyr">2017 - Built by Raymond Thompson - Website Design from phpjabber.com<br/>
-This see other websites at raythompsonwebdev.co.uk
                    <br/>
                    <script type="text/javascript">
                        document.write("Page Last Updated: " + document.lastModified);
                    </script>
                </p>

            </section><!--Wrapper end-->


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
            <script type='text/javascript'>
                        window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js">\x3C/script>')
            </script>

            <script src="js/jquery-ui-1.10.3.custom.js"></script>
            <script>
                        $(function () {
                            $("#accordion").accordion({
                                collapsible: true
                            });
                        });
            </script>

            <script src="js/pagination.js"></script>
            <script src="js/custom.js"></script>


    </body>
</html>
