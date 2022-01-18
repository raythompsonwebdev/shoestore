import React from "react";
import { Accordion } from "react-bootstrap";

function FindShoesAccord() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <nav id="acc_nav">
        <div id="accContainer">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Mens Shoes</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul>
                  <li>Skate Shoes</li>
                  <li>Boat Shoes</li>
                  <li>Fashion Sneakers</li>
                  <li>Formal &amp; Tuxedo</li>
                  <li>Shoes</li>
                  <li>Loafers &amp; Slip-ons</li>
                  <li>Outdoor</li>
                  <li>Sandals</li>
                  <li>Slippers</li>
                  <li>Work &amp; Safety</li>
                  <li>More...</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Womens Shoes</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul>
                  <li>Skate Shoes</li>
                  <li>Boat Shoes</li>
                  <li>Fashion Sneakers</li>
                  <li>Formal &amp; Dress</li>
                  <li>Shoes</li>
                  <li>Loafers &amp; Slip-ons</li>
                  <li>Outdoor</li>
                  <li>Sandals</li>
                  <li>Slippers</li>
                  <li>Work &amp; Safety</li>
                  <li>More...</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Kids Shoes</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul>
                  <li>Skate Shoes</li>
                  <li>Boat Shoes</li>
                  <li>Fashion Sneakers</li>
                  <li>Formal &amp; Dress</li>
                  <li>Shoes</li>
                  <li>Loafers &amp; Slip-ons</li>
                  <li>Outdoor</li>
                  <li>Sandals</li>
                  <li>Slippers</li>
                  <li>Work &amp; Safety</li>
                  <li>More...</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accessories</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul>
                  <li>Skate Shoes</li>
                  <li>Fashion Sneakers</li>
                  <li>Formal &amp; Dress</li>
                  <li>Shoes</li>
                  <li>Outdoor</li>
                  <li>Sandals</li>
                  <li>Slippers</li>
                  <li>More...</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Accessories</Accordion.Header>
            <Accordion.Body>
              <div className="panel">
                <ul>
                  <li>Bags</li>
                  <li>Belts</li>
                  <li>Scarfs</li>
                  <li>Hats</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </nav>
    </Accordion>
  );
}

export default FindShoesAccord;
