import React from "react";
import logo from "../images/shoe-store-logo.png";



class Header extends React.Component {
  render(){
    return (
      <header>
        <figure id="logo">
          <img src={logo} alt="shoe-store-logo" />
        </figure>
      </header>
    )
  }
}

export default Header;
