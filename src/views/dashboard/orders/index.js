import React from 'react'
import {Row, Col, Table, Button} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import './order.scss'

function Orders() {
    return (
        <div>
          <Row >
        <Col xl="6" xs="12" md="6">
          <Button.Ripple
            // onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Create Orders
          </Button.Ripple>
        </Col>
      </Row>
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
            // onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Manage Orders
          </Button.Ripple>
        </Col>
      </Row>

    <Row className="card order-table">
    <Table hover>
      <thead>
        <tr>
          <th>order date</th>
          <th>order id</th>
          <th>customer</th>
          <th>amount</th>
          <th>No of tokens</th>
          <th>currency</th>
          <th>Edit</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">22//10/2020</th>
          <td>1</td>
          <td>Dev</td>
          <td>$123</td>
          <td>23</td>
          <td>Eth</td>
          <td>
          <Icon name='edit' />
          </td>
          <td>
          <Icon name='check' />
          </td>
        </tr>
      
        <tr>
          <th scope="row">22//10/2020</th>
          <td>1</td>
          <td>Dev</td>
          <td>$123</td>
          <td>23</td>
          <td>Eth</td>
          <td>
          <Icon name='edit' />
          </td>
          <td>
          <Icon name='check' />
          </td>
        </tr>
      
        <tr>
          <th scope="row">22//10/2020</th>
          <td>1</td>
          <td>Dev</td>
          <td>$123</td>
          <td>23</td>
          <td>Eth</td>
          <td>
          <Icon name='edit' />
          </td>
          <td>
          <Icon name='check' />
          </td>
        </tr>
      
      </tbody>
    </Table>
    </Row>
        </div>
    )
}

export default Orders
