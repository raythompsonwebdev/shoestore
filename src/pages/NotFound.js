import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <main id="content" role="main" style={{ minHeight: '400px' }}>
        <h1>
          Oops! Error. Click
          <a href="/">here</a>
          to get to Home page
        </h1>
      </main>
    );
  }
}

export default NotFound;
