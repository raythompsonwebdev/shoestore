/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion } from 'react-bootstrap'
import { AccordianType } from '../types'


const AccordianMenu = (props: { accordianData : AccordianType[]}) => {

  const { accordianData } = { ...props }

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <nav id="accordian-nav" aria-label="secondary">
        <div id="accordian-nav-container">
          {accordianData.map((element) => (
            <Accordion.Item eventKey={element._id} key={element._id}>
              <Accordion.Header>{element.title}</Accordion.Header>
              <Accordion.Body>
                <div className="panel">
                  <ul>
                    {element.items.map((ele: string) => (
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
  )
}

export default AccordianMenu
