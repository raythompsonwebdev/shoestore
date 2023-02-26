import React from "react";
import { Accordion } from "react-bootstrap";
import accordion from "../static/data/accordion.json";

// eslint-disable-next-line func-style
function FindShoesAccord() {
  // eslint-disable-next-line no-console
  // console.log(accordion);

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <nav id="accordian-nav" aria-label="secondary">
        <div id="accordian-nav-container">
          {accordion.map((element) => (
            <Accordion.Item eventKey={element.id} key={element.id}>
              <Accordion.Header>{element.title}</Accordion.Header>
              <Accordion.Body>
                <div className="panel">
                  <ul>
                    {element.items.map((ele) => (
                      <li key={ele}>{ele}</li>
                    ))}
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </div>
      </nav>
    </Accordion>
  );
}

export default FindShoesAccord;