import React from "react";

// eslint-disable-next-line func-style
function Header(props) {
  const { logo } = { ...props };
  return (
    <header>
      <figure id="logo">
        <img src={logo} alt="shoe-store-logo" />
      </figure>
    </header>
  );
}

export default Header;
