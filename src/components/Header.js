import React from "react";
import logo from "../images/shoe-store-logo.png";
//import $ from "jquery";

const Header = () => {
              
    return (
      <header>
        <figure id="logo">
          <img src={logo} alt="shoe-store-logo" />
        </figure>
        
      </header>
    );
  
}

export default Header;
