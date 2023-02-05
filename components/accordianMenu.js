import { Accordion } from "react-bootstrap";

// eslint-disable-next-line func-style
export default function AccordianMenu(props) {
  // eslint-disable-next-line no-console
  //console.log(props);

  const { accordian } = { ...props };

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <nav id="accordian-nav" aria-label="secondary">
        <div id="accordian-nav-container">
          {accordian.map((element) => (
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
