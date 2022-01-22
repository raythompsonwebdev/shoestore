import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer-header">
      <ul className="footer_nav">
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
    </footer>
  );
}

export default Footer;
