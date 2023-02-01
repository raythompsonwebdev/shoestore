import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";

// eslint-disable-next-line func-style
function MainNav() {
  const [visibility, setVisibility] = useState({ visibility: false });
  // const [isOpen, setIsOpen] = useState(false);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  // const toggle = () => setIsOpen(!isOpen);

  // const logoutWithRedirect = () =>
  //   logout({
  //     returnTo: window.location.origin,
  //   });

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
      <ul id="inner-nav">
        <li className="inner-nav-item">
          <Link
            to="/"
            title="Home Page"
            className="inner-nav-link"
            aria-label="Home Page"
          >
            Home
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            to="/newproducts"
            title="new products page"
            className="inner-nav-link"
            aria-label="new products page"
          >
            New Products
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            to="/specials"
            title="specials page"
            className="inner-nav-link"
            aria-label="specials page"
          >
            Specials
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            to="/allproducts"
            title="all products page"
            className="inner-nav-link"
            aria-label="all products page"
          >
            All Products
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            to="/faqs"
            title="faqs page"
            className="inner-nav-link"
            aria-label="faqs page"
          >
            FAQS
          </Link>
        </li>
        <li className="inner-nav-item">
          <Link
            to="/contact"
            title="contact page"
            className="inner-nav-link"
            aria-label="contact page"
          >
            Contact
          </Link>
        </li>
      </ul>

      <ul id="" className={`mobile-nav ${!visibility ? "is-expanded" : " "}`}>
        <li className="mobile-nav-item">
          <Link
            to="/"
            title="Home Page"
            aria-label="Home Page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            Home
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            to="/newproducts"
            title="new products page"
            aria-label="new products page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            New Products
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            to="/specials"
            title="specials page"
            aria-label="specials page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            Specials
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            to="/allproducts"
            title="all products page"
            aria-label="all products page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            All Products
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            to="/faqs"
            title="faqs page"
            aria-label="faqs page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            FAQS
          </Link>
        </li>
        <li className="mobile-nav-item">
          <Link
            to="/contact"
            title="contact page"
            aria-label="contact page"
            onMouseUp={menuToggleFunc}
            className="mobile-nav-link"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* <span id="signin-box">
        {!isAuthenticated && (
          <Link
            to="/"
            title=""
            onClick={() =>
              loginWithRedirect({ returnTo: window.location.origin })
            }
            className="signin-box-link"
          >
            Login
          </Link>
        )}
        {!isAuthenticated && (
          <Link to="/register" title="" className="signin-box-link">
            register
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/profile" title="" className="signin-box-link">
            account
          </Link>
        )}
        {isAuthenticated && (
          <Link
            to="/logout"
            title=""
            onClick={() => logoutWithRedirect()}
            className="signin-box-link"
          >
            logout
          </Link>
        )}
      </span> */}

      <button id="menu-toggle-btn" type="button" onClick={toggleVisibility}>
        MENU
      </button>
    </nav>
  );
}

export default MainNav;
