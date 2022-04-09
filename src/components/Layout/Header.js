import React from "react";
import logo from "../../images/shoe-store-logo.png";

// eslint-disable-next-line func-style
function Header() {
  return (
    <header>
      <figure id="logo">
        <img src={logo} alt="shoe-store-logo" />
      </figure>
    </header>
  );
}

export default Header;
