import { Accordion } from "react-bootstrap";

// eslint-disable-next-line func-style
export default function AccordianMenu(props: { accordianData: any }) {
  const { accordianData }: any = { ...props };

  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      <nav id="accordian-nav" aria-label="secondary">
        <div id="accordian-nav-container">
          {accordianData.map((element: any) => (
            <Accordion.Item eventKey={element._id} key={element._id}>
              <Accordion.Header>{element.title}</Accordion.Header>
              <Accordion.Body>
                <div className="panel">
                  <ul>
                    {element.items.map((ele: any) => (
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