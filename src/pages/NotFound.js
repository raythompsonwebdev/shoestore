import React from "react";

function NotFound() {
  return (
    <main id="content" role="main" style={{ minHeight: "400px" }}>
      <h1>Oops! Error.</h1>
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
