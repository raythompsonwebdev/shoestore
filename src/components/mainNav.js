import React from "react";
import {  Link  } from 'react-router-dom';

const menuMob = () => {
  var menuToggle = document.getElementById('menu-toggle-btn');
  let slideoutMenu = document.getElementById('mobile-nav');

  menuToggle.addEventListener('click', function(event){
  	event.preventDefault();
    // create menu variables

  	var slideoutMenuHeight = slideoutMenu.offsetHeight;
  	// toggle open class
  	slideoutMenu.classList.toggle("open");
  	slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
  	// slide menu
  	if (slideoutMenu.classList.contains("open")) {
  		slideoutMenu.style.top = "0px";
  	} else {
  		slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
  		slideoutMenu.style.top = -slideoutMenuHeight + 'px';
  	}
  });
}


function MainNav() {

    return (

      <nav id="main-nav" role="navigation">

        <span id="signin-box">
          <Link to="/" title="">
            Sign in
          </Link>
          <Link to="/" title="">
            my account
          </Link>
          <Link to="/" title="">
            help
          </Link>
        </span>

        <ul id="inner-nav">
          <li>
            <Link to="/" title="Home Page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/newproducts" title="">
              New Products
            </Link>
          </li>
          <li>
            <Link to="/specials" title="">
              Specials
            </Link>
          </li>
          <li>
            <Link to="/allproducts" title="">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/faqs" title="">
              FAQS
            </Link>
          </li>
          <li>
            <Link to="/contact" title="">
              Contact
            </Link>
          </li>
        </ul>

        <ul id="mobile-nav">
          <li>
            <Link to="/" title="Home Page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/newproducts" title="New Product Page">
              New Products
            </Link>
          </li>
          <li>
            <Link to="/specials" title="Specials Page">
              Specials
            </Link>
          </li>
          <li>
            <Link to="/allproducts" title="All Products Page">
              All Products
            </Link>
          </li>
          <li>
            <Link to="faqs" title="FAQ Page">
              FAQS
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact Page">
              Contact
            </Link>
          </li>
        </ul>

        <button id="menu-toggle-btn" onClick={menuMob}>MENU</button>

      </nav>
    )

}

export default MainNav;
