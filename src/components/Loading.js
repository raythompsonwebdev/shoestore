import React from "react";
import loading from "../static/images/shoppingcart.gif";

function Loading() {
  return (
    <div className="spinner">
      <img src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
