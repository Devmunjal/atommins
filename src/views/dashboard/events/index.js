import React, { useEffect, useState } from "react"
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Table
} from "reactstrap"
import { X, Check, Trash } from "react-feather"
import { Icon } from 'semantic-ui-react'
import './events.scss'

function Events() {
  const [createNewsLetter, setcreateNewsLetter] = useState(false)
  const [Error, setError] = useState(true)
  const [company, setcompany] = useState([])
  const [date, setdate] = useState("")
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [metaData, setmetaData] = useState("")
  const [companyid, setcompanyid] = useState(null)
  const [EventData, setEventData] = useState([])
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={15}
      onClick={() => {
        setcreateNewsLetter(false)
      }}
    />
  )
  function fetchAllcompanies() {
    try {
      fetch('https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/company', {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem('token')}`
        }
      }).then((resp) => resp.json()).then(resp => { console.log(resp) })
    } catch (err) {
      console.log(err)
    }
  }

  function fetchEventsData() {
    try {
      fetch("https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/event", {
        headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem('token')}`
      },
      method: "GET"
      })
      .then((resp) => resp.json()).then(resp => { 
        if (resp.error) {
          setError(true)
        } else {
          setError(false)
          setEventData(resp.result)
        }
        
       })
    } catch (err) {
        console.log(err)
      }
  }
  function createEvent() {
    try {
        const event = {
          date,
          title,
          description,
          metaData,
          company:companyid
        }
        fetch("https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/event", {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${localStorage.getItem('token')}`
            },
            method: "POST",
            body : JSON.stringify(event)
        }).then(resp => { setcreateNewsLetter(false); fetchEventsData() })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    const d = new Date()
    const year = 
    setdate(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`)
    console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`)
    fetchEventsData()
    fetchAllcompanies()
    return () => {}
  }, [])

  return (
    <div>
      <Row>
        <Col xl="6" xs="12" md="6">
          <Button.Ripple
            onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Create Events
          </Button.Ripple>
        </Col>
      </Row>
      <Modal
        fade={false}
        className="modal-lg"
        isOpen={createNewsLetter}
        backdrop={true}
        //toggle={() => setcreateNewsLetter(false) }
      >
        <ModalHeader
          className="mb-1"
          style={{ fontSize: "18px" }}
          toggle={() => setcreateNewsLetter(false)}
          close={CloseBtn}
          tag="div"
        >
          Create Events
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xl="12" xs="12" md="12">
              <Form>
                <FormGroup>
                  <Label for="customer-name" className="form-label">
                    Title
                  </Label>
                  <Input
                    id="customer-name"
                    placeholder="Enter Title Of News Letter"
                    onChange={e => settitle(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="customer-subtitle" className="form-label">
                    Date
                  </Label>
                  <Input onChange={e => setdate(e.target.value)} type="date" id="customer-subtitle" />
                </FormGroup>
                {/* <FormGroup>
                  <Label for="exampleSelect" className="form-label">
                    Select
                  </Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>company1</option>
                      <option>company2</option>
                      <option>company3</option>
                      <option>company4</option>
                      <option>company5</option>
                    </Input>
                </FormGroup> */}
                <FormGroup>
                  <Label for="customer-address" className="form-label">
                    Description
                  </Label>
                  <Input
                    type="textarea"
                    cols="2"
                    rows="2"
                    id="customer-address"
                    placeholder="Enter Description Of NewsLetter"
                    onChange={e => setdescription(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="d-flex flex-wrap mt-2">
                  <Button
                    className="mr-1"
                    color="primary"
                    onClick={() => createEvent()}
                  >
                    Add
                  </Button>
                  <Button.Ripple
                    color="secondary"
                    onClick={() => setcreateNewsLetter(false)}
                    outline
                  >
                    Cancel
                  </Button.Ripple>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      {/* <Row>
        <Col xl="12" xs="12" md="12">
          <div
            className="card"
            style={{
              marginTop: "10px",
              paddingLeft: "10px",
              paddingTop: "10px",
              cursor: "pointer"
            }}
          >
            <h3>Title</h3>
            <p>Description</p>
          </div>
        </Col>
      </Row> */}
      <Row>
        {/* <Col xl="6" xs="12" md="6">
          <Button.Ripple
            onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Manage Events
          </Button.Ripple>
        </Col> */}
      </Row>
      <Row className="card event-table">
        {Error && <div className="card" style={{paddingTop:"15px", textAlign:"center"}}>
            <h2>No Events</h2>
            <h4>
              Please Click On Create Event To Create New Event
            </h4>
          </div>}
    {!Error && EventData  && <Table hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {!Error && EventData  && EventData.length > 0 && EventData.map((oneEvent) => {
          console.log(oneEvent)
          return (
            <tr>
          <th scope="row">{oneEvent.title}</th>
          <td>{oneEvent.date}</td>
          <td>{oneEvent.description}</td>
          <td>
          <Icon name='edit' />
          </td>
        </tr>
          )
        })}
        
      </tbody>
    </Table>}
    </Row>
    </div>
  )
}

export default Events
