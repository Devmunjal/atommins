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
import { parseJSON } from "jquery"

function NewsLetter() {
  const [createNewsLetter, setcreateNewsLetter] = useState(false)
  const [ErrorCompany, setErrorCompany] = useState(true)
  const [NoData, setNoData] = useState(false)
  const [newsLetter, setnewsLetter] = useState([])
  const [title, settitle] = useState("")
  const [subtitle, setsubtitle] = useState("")
  const [description, setdescription] = useState("")
  const [company, setcompany] = useState(null)
  const [metaData, setmetaData] = useState("")
  const [companyData, setcompanyData] = useState([])
  const CloseBtn = (
    <X
      className="cursor-pointer"
      size={15}
      onClick={() => {
        setcreateNewsLetter(false)
      }}
    />
  )
  function fetchNewsletter () {
    fetch("https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/newsletter", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem('token')}`
      },
      method: "GET"
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          setNoData(true)
          setErrorCompany(false)
        } else {
          setNoData(false)
          setErrorCompany(false)
          console.log(resp)
          setnewsLetter(resp.result)
        }
      })
  }
  function createnewsLetter () {
    const newsletter = {
      title,
      subtitle,
      description,
      metaData,
      company
    }
    fetch("https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/newsletter", {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem('token')}`
      },
      method: "POST",
      body: JSON.stringify(newsletter)
    }).then((resp) => { fetchNewsletter(); setcreateNewsLetter(false) })
  }
  function fetchAllcompanies() {
    try {
      fetch('https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/company', {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem('token')}`
        },
        method:"GET"
      }).then(resp => resp.json()).then((resp) => setcompanyData(resp.result))
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchNewsletter()
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
                  <Input onChange= {e => settitle(e.target.value) } id="customer-name" placeholder="Enter Title Of News Letter"  />
                </FormGroup>
                <FormGroup>
                  <Label for="customer-subtitle" className="form-label">
                    Sub Title
                  </Label>
                  <Input
                    type="text"
                    id="customer-subtitle"
                    placeholder="Enter Sub Title Of NewsLetter"
                    onChange ={ e => setsubtitle(e.target.value)}
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
                    onChange = {e => setdescription(e.target.value)}
                  />
                </FormGroup>
                {
                 companyData && companyData.length > 0 && 
                  <FormGroup>
                    <Label for="exampleSelect" className="form-label">
                      Select
                    </Label>
                      <Input type="select" name="select" id="exampleSelect">

                      </Input>
                  </FormGroup>
                }
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
      {/* <Row>
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
      </Row> */}
    
    
    <Row >
        {/* <Col xl="6" xs="12" md="6">
          <Button.Ripple
            onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Manage NewsLetter
          </Button.Ripple>
        </Col> */}
      </Row>

    <Row className="card newsletter-table">
    <Table hover>
    {NoData && <div className="card" style={{paddingTop:"15px", textAlign:"center"}}>
            <h2>No NewsLetter</h2>
            <h4>
              Click on Create NewsLetter Button to List the NewsLetter.
            </h4>
          </div>}
    {ErrorCompany && <div className="card" style={{paddingTop:"15px", textAlign:"center"}}>
            <h2>Loading</h2>
            <h4>
              Please Wait .....
            </h4>
      </div>}
      {!NoData && !ErrorCompany && newsLetter.length > 0 &&  <thead>
        <tr>
          <th>Title</th>
          <th>SubTitle</th>
          <th>Description</th>
          <th>Edit</th>
        </tr>
      </thead>}
      <tbody>
        {!NoData && !ErrorCompany && newsLetter.length > 0 && newsLetter.map((oneNewsLetter) => {
          return (
            <tr>
              <th scope="row">{oneNewsLetter.title}</th>
              <td>{oneNewsLetter.subtitle}</td>
              <td>{oneNewsLetter.description}</td>
              <td>
              <Icon name='edit' />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
    </Row>
    </div>
  )
}

export default NewsLetter
