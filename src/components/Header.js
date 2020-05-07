import React from "react";
import logo from "../images/shoe-store-logo.png";
//import $ from "jquery";
class Header extends React.Component {
  
  render() {
    return (
      <header>
        <figure id="logo">
          <img src={logo} alt="shoe-store-logo" />
        </figure>

        <button id="menu-toggle-btn">MENU</button>
      </header>
    );
  }
}

export default Header;
