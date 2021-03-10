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
import './newsletter.scss'
import { X, Check, Trash } from "react-feather"
import { Icon } from 'semantic-ui-react'

function NewsLetter() {
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
    fetch("http://127.0.0.1:5000/get_all_Newsletter", {
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
            Create NewsLetter
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
          Create NewsLetter
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
                    Sub Title
                  </Label>
                  <Input
                    type="text"
                    id="customer-subtitle"
                    placeholder="Enter Sub Title Of NewsLetter"
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
                <FormGroup>
                  <Label for="customer-subtitle" className="form-label">
                    Sub Title
                  </Label>
                  <Input
                    type="text"
                    id="image-url"
                    placeholder="Image-URL"
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
    
    
    <Row >
        <Col xl="6" xs="12" md="6">
          <Button.Ripple
            onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Manage NewsLetter
          </Button.Ripple>
        </Col>
      </Row>

    <Row className="card newsletter-table">
    <Table hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>SubTitle</th>
          <th>Image URL</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
          <Icon name='edit' />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
          <Icon name='edit' />
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>
          <Icon name='edit' />
          </td>
        </tr>
      </tbody>
    </Table>
    </Row>
    </div>
  )
}

export default NewsLetter
