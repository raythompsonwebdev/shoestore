import React from "react";

function NotFound() {
  return (
    <main id="main-content" role="main" style={{ minHeight: "400px" }}>
      <h1 className="main-content-title">Oops! Error.</h1>
      <p>
        Click
        <a href="/" aria-label="go to home page link">
          here
        </a>
        to get to Home page
      </p>
    </main>
  );
}

export default NotFound;
