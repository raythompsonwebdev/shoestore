import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="Footer-header">
      <ul className="footer_nav">
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
    </footer>
  );
}

export default Footer;
