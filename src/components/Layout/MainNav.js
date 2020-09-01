import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility(e) {
    e.preventDefault();
    this.setState({ visibility: !this.state.visibility });
  }

  render() {
    const { visibility } = this.state;
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

        <ul id="" className={`mobile-nav ${visibility ? 'is-expanded' : ' '}`}>
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

        <button id="menu-toggle-btn" type="button" onClick={this.toggleVisibility}>MENU</button>

      </nav>
    );
  }
}

export default MainNav;
