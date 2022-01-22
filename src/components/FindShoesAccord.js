import React from "react";
import { Accordion } from "react-bootstrap";
import accordion from "./accordion.json";

function FindShoesAccord() {
  // eslint-disable-next-line no-console
  // console.log(accordion);

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <nav id="acc_nav" aria-label="secondary">
        <div id="accContainer">
          {accordion.map((element) => (
            <Accordion.Item eventKey={element.id} key={element.id}>
              <Accordion.Header>{element.title}</Accordion.Header>
              <Accordion.Body>
                <div className="panel">
                  <ul>
                    {element.items.map((ele) => (
                      <li>{ele}</li>
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
