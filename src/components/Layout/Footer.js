import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function Footer() {
  return (
    <footer className="footer-nav">
      <ul className="footer-inner-nav">
        <li className="footer-inner-nav-item">
          <Link
            to="/"
            title="Home Page"
            className="footer-inner-nav-link"
            aria-label="Home Page"
          >
            Home
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            to="/newproducts"
            title="new products page"
            aria-label="new products page"
            className="footer-inner-nav-link"
          >
            New Products
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            to="/specials"
            title="specials page"
            className="footer-inner-nav-link"
            aria-label="specials page"
          >
            Specials
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            to="/allproducts"
            title="all products page"
            aria-label="all products page"
            className="footer-inner-nav-link"
          >
            All Products
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            to="/faqs"
            title="faqs page"
            className="footer-inner-nav-link"
            aria-label="faqs page"
          >
            FAQS
          </Link>
        </li>
        <li className="footer-inner-nav-item">
          <Link
            to="/contact"
            title="contact page"
            className="footer-inner-nav-link"
            aria-label="contact page"
          >
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
