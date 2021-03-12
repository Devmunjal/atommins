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
import './company.scss'
import { Icon } from 'semantic-ui-react'
import { parseJSON } from "jquery"
function Company() {
  const [contractAddress, setcontractAddress] = useState("")
    const [createNewsLetter, setcreateNewsLetter] = useState(false)
    const [share, setshare] = useState("")
    const [price, setprice] = useState("")
    const [description, setdescription] = useState("")
    const [nameCompany, setnameCompany] = useState("")
    const [company, setcompany] = useState([])
    const [ErrorCompany, setErrorCompany] = useState(true)
    const [NoData, setNoData] = useState(false)
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
        }).then((resp) => resp.json()).then(resp => { 
          if (resp.error) {
              setNoData(true)
              setErrorCompany(false)
          } else { setNoData(false); setErrorCompany(false); setcompany(resp.result) } 
        })
      } catch (err) {
        console.log(err)
      }
    }

    const createCompany = () => {
      try {
        const company = {
          contractAddress,
          share,
          price,
          metaData: JSON.stringify({ description, nameCompany })
        }
          fetch('https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/company', {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": `${localStorage.getItem('token')}`
            },
            method: "POST",
            body: JSON.stringify(company)
          }).then(resp => { fetchAllcompanies(); setcreateNewsLetter(false) })
      } catch (err) {
         console.log(err)
      }
    }

    useEffect(() => {
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
              Add Company
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
            Add Company
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col xl="12" xs="12" md="12">
                <Form>
                  <FormGroup>
                    <Label for="customer-name" className="form-label">
                      Name
                    </Label>
                    <Input id="customer-name" placeholder="Enter Title Of News Letter" onChange = { e => setnameCompany(e.target.value) }  />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customer-subtitle" className="form-label">
                      Contract Address
                    </Label>
                    <Input
                      type="text"
                      id="customer-subtitle"
                      placeholder="XXXXXXXXXXXX"
                      onChange = { e => setcontractAddress(e.target.value) } 
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customer-address" className="form-label">
                      Share
                    </Label>
                    <Input
                      type="text"
                      cols="2"
                      rows="2"
                      id="customer-address"
                      placeholder="Enter Total Share"
                      onChange = { e => setshare(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="customer-address" className="form-label">
                      Price
                    </Label>
                    <Input
                      type="text"
                      cols="2"
                      rows="2"
                      id="customer-address"
                      placeholder="Enter Price Of Share"
                      onChange = { e => setprice(e.target.value)}
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
                      placeholder="Enter About Company"
                      onChange = { e => setdescription(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="d-flex flex-wrap mt-2">
                    <Button
                      className="mr-1"
                      color="primary"
                      onClick={() => createCompany()}
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
          {/* <Col xl="6" xs="12" md="6">
            <Button.Ripple
              onClick={() => setcreateNewsLetter(true)}
              color="success"
              style={{ fontSize: "18px" }}
            >
              Manage Company
            </Button.Ripple>
          </Col> */}
        </Row>
        <Row className="manage-table card">
        <Table hover>
        {NoData && <div className="card" style={{paddingTop:"15px", textAlign:"center"}}>
            <h2>No Company</h2>
            <h4>
              Click on Create Company Button to List the Company.
            </h4>
          </div>}
        {ErrorCompany && <div className="card" style={{paddingTop:"15px", textAlign:"center"}}>
            <h2>Loading</h2>
            <h4>
              Please Wait .....
            </h4>
          </div>}
      {!NoData && !ErrorCompany && company.length > 0 && <thead> 
        <tr>
          <th>Name</th>
          <th>Contract Address</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>}
      <tbody>
        {!NoData && !ErrorCompany && company && company.length > 0 && company.map((oncompany) => {
          const description = (parseJSON(oncompany.metaData))
          return (
            <tr>
              <th scope="row">{description["nameCompany"] ? description["nameCompany"] : "Test Company" }</th>
              <td>{oncompany.contractAddress}</td>
              <td>${oncompany.price}</td>
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


export default Company
