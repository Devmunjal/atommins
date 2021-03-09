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
  Label
} from "reactstrap"
import { X, Check, Trash } from "react-feather"

function Events() {
    const [createNewsLetter, setcreateNewsLetter] = useState(false)
    const CloseBtn = (
      <X
        className="cursor-pointer"
        size={15}
        onClick={() => {
          setcreateNewsLetter(false)
        }}
      />
    )
    useEffect(() => {
      fetch("http://127.0.0.1:5000/get_all_events", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": ""
        },
        method: "GET"
      })
        .then(resp => resp.json)
        .then(resp => {
          console.log(resp)
        })
      return () => {}
    }, [])
    const createnewsLetter = () => {
      console.log("hii")
    }
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
                    <Input id="customer-name" placeholder="Enter Title Of News Letter"  />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customer-subtitle" className="form-label">
                      Date
                    </Label>
                    <Input
                      type="date"
                      id="customer-subtitle"
                    />
                  </FormGroup>
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
                    />
                  </FormGroup>
                  <FormGroup className="d-flex flex-wrap mt-2">
                    <Button
                      className="mr-1"
                      color="primary"
                      onClick={() => createnewsLetter()}
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
        <Row>
          <Col xl="12" xs="12" md="12">
            <div className="card" style={{marginTop:"10px", paddingLeft:"10px", paddingTop:"10px", cursor:"pointer" }}>
              <h3>
                  Title
              </h3>
              <p>
                  Description
              </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }

export default Events
