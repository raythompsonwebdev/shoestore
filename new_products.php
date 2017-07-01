<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="shoe store website selling the latest shoes and accessories at affordable prices. " />
<meta name="keywords" content="Shoes, Boots, Footware, Handbags, Hats, " />
<meta name="viewport" content="minimum-scale=0">
<meta name="viewport" content="user-scalable=yes">
<meta name="viewport" content="target-densitydpi=device-dpi">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="RayThompsonWebdev" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="copyright" content="&copy;raymondthompson" />
<meta name="robots" content="noindex,nofollow">

<!--favicon-->
<link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png">
<link rel="manifest" href="icons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="icons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">


<!--End Scale-->
<title>Shoestore-New-Products-Page</title>

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
<div id="Wrapper">
    <div id="menu-toggle-btn">MENU</div>
    <!--Header-->
    <header>

        <figure id="logo">
            <img src="images/shoe-store-logo.png" alt="shoe-store-logo" />
        </figure>
    </header>

    <!--Navigation-->
<nav id="main-nav" role="navigation">
    <span id="signin-box">
        <a href="#" alt="">Sign in</a>
        <a href="#" alt="">Login</a>
        <a href="#" alt="">Help</a>
    </span>
    <ul id="inner-nav">
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

    <!-- name="searchbar" -->
    <aside id="searchbar">
        <form id="searcher2" action="" method="get">
            <label>New Products</label>
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
            <input name="find" class="find2" type="submit" value="Go" />
        </form>
    </aside>

    <!--Content-->
    <section id="content" class="clearfix" role="main">

        <!--Left bar-->
        <aside id="left_bar" role="complimentary">

            <div id="sec_nav" role="navigation">
                <div id="accordion">
                    <h3>Men&acute;s Shoes</h3>
                    <div>
                        <ul>
                            <li>Athletics</li>
                            <li>Boat </li>
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
                            <li>Boat</li>
                            <li>Fashion</li>
                            <li>Formal </li>
                            <li>Shoes</li>
                            <li>Lace-Ups</li>
                            <li>Loafers</li>
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
                            <li>Boat </li>
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
            </div>
            <!--end of sec nav-->

        </aside>
        <!--end of left bar-->

        <!--Content_section-->

        <div id="content_section">
            <form action="" method="get" enctype="application/x-www-form-urlencoded">

                <section id="results">

                    <div class="product_boxes_longer"><!--product boxes-->

                        <!--product box-->
                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 001</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <!--product box-->
                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-hiking-boot.png"  alt="fur-lined-hiking-boot" />
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 002</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <!--product box-->
                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/basket-ball-shoe.png"  alt="basket-ball-shoe"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 003</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>

                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <!--product box-->
                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/kids-trainer.png"  alt="kids-trainer"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 004</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-hiking-boot.png"  alt="fur-lined-hiking-boot"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 005</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>

                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/basket-ball-shoe.png"  alt="basket-ball-shoe"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 006</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/kids-trainer.png"  alt="kids-trainer"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 006</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->
                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot" />
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 007</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/basket-ball-shoe.png"  alt="basket-ball-shoe" />
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 007</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>

                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/kids-trainer.png"  alt="kids-trainer"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 008</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>


                    </div><!--end of product boxes longer-->
                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-ladies-boot.png"  alt="fur-lined-ladies-boot"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 008</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>

                    </div><!--end of product boxes longer-->


                    <div class="product_boxes_longer"><!--product boxes-->

                        <figure class="product-box_longer">
                            <img class="product_boximg_longer" src="images/fur-lined-hiking-boot.png"  alt="fur-lined-hiking-boot"/>
                            <figcaption class="product_boxdetails_longer">
                                <h1>Product 008</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis eius error, animi iusto est voluptates, ipsa autem asperiores culpa. Autem dolor similique accusamus praesentium quas expedita quos ratione quibusdam.</p>
                                <span class="price_longer">Price :$30.00</span>
                                <span class="price_longer">
                                    <img class="product_icon_longer" src="images/shoppingcart.gif" alt="shopping-cart" />
                                    Add to Cart</span>
                            </figcaption>
                        </figure>

                    </div><!--end of product boxes longer-->

                </section><!--end of results section-->

                <br/>
                <div class="clearfix"></div>
                <div class="pag_buttons">
                    <input type="submit" value="submit" onclick="alert('Hey, this is just a sample!'); return false;" />&nbsp;
                    <input type="reset" value="reset" name="reset"/>
                </div>

            </form>
            <br/><br/>
        </div>

    </section><!--end of content-->
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
        </footer>
        <div class="clearfix"></div>
        <p class="copyr">2017 - Built by Raymond Thompson - Website Design from phpjabber.com<br/>
            -This see other websites at raythompsonwebdev.co.uk
            <br/>
            <script type="text/javascript">
                document.write("Page Last Updated: " + document.lastModified);
            </script>
        </p>

</div><!--Wrapper end-->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type='text/javascript'>
                window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js">\x3C/script>');
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
