import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// eslint-disable-next-line func-style
function MainNav() {
  const [visibility, setVisibility] = useState({ visibility: false });
  // const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  // eslint-disable-next-line func-style
  const toggleVisibility = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  const menuToggleFunc = (e) => {
    e.preventDefault();
    setVisibility(!visibility);
  };

  return (
    <nav id="main-nav" role="navigation">
      <span id="signin-box">
        {!isAuthenticated && (
          <Link
            to="/"
            title=""
            onClick={() =>
              loginWithRedirect({ returnTo: window.location.origin })
            }
          >
            Log in
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/register" title="">
            register
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/profile" title="">
            account
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/logout" title="" onClick={() => logoutWithRedirect()}>
            logout
          </Link>
        )}
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
          <Link
            to="/"
            title="Home Page"
            aria-label="Home Page"
            onMouseUp={menuToggleFunc}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/newproducts"
            title="new products page"
            aria-label="new products page"
            onMouseUp={menuToggleFunc}
          >
            New Products
          </Link>
        </li>
        <li>
          <Link
            to="/specials"
            title="specials page"
            aria-label="specials page"
            onMouseUp={menuToggleFunc}
          >
            Specials
          </Link>
        </li>
        <li>
          <Link
            to="/allproducts"
            title="all products page"
            aria-label="all products page"
            onMouseUp={menuToggleFunc}
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            to="/faqs"
            title="faqs page"
            aria-label="faqs page"
            onMouseUp={menuToggleFunc}
          >
            FAQS
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            title="contact page"
            aria-label="contact page"
            onMouseUp={menuToggleFunc}
          >
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
