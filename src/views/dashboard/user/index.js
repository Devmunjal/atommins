import React from 'react'
import {Row, Col, Button, Table} from 'reactstrap'
function User() {
    return (
        <div>
                  <Row>
          <Col xl="6" xs="12" md="6">
            <Button.Ripple
              // onClick={() => setcreateNewsLetter(true)}
              color="success"
              style={{ fontSize: "18px" }}
            >
              Manage User
            </Button.Ripple>
          </Col>
        </Row>
        <Row>
          <Col xl="12" xs="12" md="12">
            <div className="card" style={{marginTop:"10px", paddingLeft:"10px", paddingTop:"10px", cursor:"pointer" }}>
              <h3>
                  Name
              </h3>
              <p>
                  Description
              </p>
            </div>
          </Col>
        </Row>
        <Row  className="card user-table">
        <Table hover>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Wallet Address</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>xlkdjfoi#12</td>
         
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>xlkdjfoi#12</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>xlkdjfoi#12</td>
          
        </tr>
      </tbody>
    </Table>
        </Row>
        </div>
    )
}

export default User
