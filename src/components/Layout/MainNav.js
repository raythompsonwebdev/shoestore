import React, { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function MainNav() {
  const [visibility, setVisibility] = useState({ visibility: false });

  // eslint-disable-next-line func-style
  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  return (
    <nav id="main-nav" role="navigation">
      <span id="signin-box">
        <Link to="/login" title="">
          Sign in
        </Link>
        <Link to="/register" title="">
          register
        </Link>
        <Link to="/" title="">
          help
        </Link>
      </span>

      <ul id="inner-nav">
        <li>
          <Link to="/" title="Home Page" aria-label="Home Page">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/newproducts"
            title="new products page"
            aria-label="new products page"
          >
            New Products
          </Link>
        </li>
        <li>
          <Link to="/specials" title="specials page" aria-label="specials page">
            Specials
          </Link>
        </li>
        <li>
          <Link
            to="/allproducts"
            title="all products page"
            aria-label="all products page"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link to="/faqs" title="faqs page" aria-label="faqs page">
            FAQS
          </Link>
        </li>
        <li>
          <Link to="/contact" title="contact page" aria-label="contact page">
            Contact
          </Link>
        </li>
      </ul>

      <ul id="" className={`mobile-nav ${!visibility ? "is-expanded" : " "}`}>
        <li>
          <Link to="/" title="Home Page" aria-label="Home Page">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/newproducts"
            title="new products page"
            aria-label="new products page"
          >
            New Products
          </Link>
        </li>
        <li>
          <Link to="/specials" title="specials page" aria-label="specials page">
            Specials
          </Link>
        </li>
        <li>
          <Link
            to="/allproducts"
            title="all products page"
            aria-label="all products page"
          >
            All Products
          </Link>
        </li>
        <li>
          <Link to="/faqs" title="faqs page" aria-label="faqs page">
            FAQS
          </Link>
        </li>
        <li>
          <Link to="/contact" title="contact page" aria-label="contact page">
            Contact
          </Link>
        </li>
      </ul>

      <button id="menu-toggle-btn" type="button" onClick={toggleVisibility}>
        MENU
      </button>
    </nav>
  );
}

export default MainNav;
