import React from "react";
import { Accordion, Button } from 'react-bootstrap';

const FindShoesAccord = () => {
  return (

    <Accordion >
    <nav id="acc_nav">
      <div id="accContainer">
      <Accordion.Toggle as={Button} variant="light" eventKey="0" size="lg" block>
        {/* <button onClick={accordion} className="accordion"> */}
          Men
        {/* </button> */}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <div className="panel">
          <ul>
            <li>Skate Shoes</li>
            <li>Boots</li>
            <li>Mens Boots</li>
            <li>Trainers</li>
            <li></li>
          </ul>
        </div>
        </Accordion.Collapse>
        <Accordion.Toggle as={Button} variant="light" eventKey="1" size="lg" block>
          Women       
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <div className="panel">
          <ul>
            <li>Skate Shoes</li>
            <li>Boots</li>
            <li>Ladies Boots</li>
            <li>Trainers</li>
          </ul>
        </div>
        </Accordion.Collapse>
        <Accordion.Toggle as={Button} variant="light" eventKey="2" size="lg" block>
          Kids
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
        <div className="panel">
          <ul>
            <li>Baby Shoes</li>
            <li>Baby Boots</li>
            <li>Kids Boots</li>
            <li>Trainers</li>
          </ul>
        </div>
        </Accordion.Collapse>
      </div>
    </nav>
    </Accordion>
  );
}

export default FindShoesAccord;
