import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

const FindShoesAccord = () => {
  <Accordion>
    <nav id="acc_nav">
      <div id="accContainer">
        <Accordion.Toggle
          as={Button}
          variant="light"
          eventKey="0"
          size="lg"
          block
        >
          {/* <button onClick={accordion} className="accordion"> */}
          Men&apos;s Shoes
          {/* </button> */}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
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
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="light"
          eventKey="1"
          size="lg"
          block
        >
          Women&apos;s Shoes
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
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
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="light"
          eventKey="2"
          size="lg"
          block
        >
          Kid&apos;s Shoes
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
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
        </Accordion.Collapse>
        <Accordion.Toggle
          as={Button}
          variant="light"
          eventKey="3"
          size="lg"
          block
        >
          Bag&apos;s &amp; Accessories
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <div className="panel">
            <ul>
              <li>Bags</li>
              <li>Belts</li>
              <li>Scarfs</li>
              <li>Hats</li>
            </ul>
          </div>
        </Accordion.Collapse>
      </div>
    </nav>
  </Accordion>;
};

export default FindShoesAccord;
