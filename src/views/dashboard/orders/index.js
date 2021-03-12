import React, { useEffect, useState } from 'react'
import {Row, Col, Table, Button} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import './order.scss'

function Orders() {
  const [Order, setOrder] = useState([])
  function allorders () {
    fetch("https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/order", {
      headers:{
        "Content-Type": "application/json",
        "x-access-token": `${localStorage.getItem('token')}`
      }
    }).then(resp => resp.json()).then(resp => setOrder(resp.result))
  }
  useEffect(() => {
    allorders()
    return () => {
      
    }
  }, [])
    return (
        <div>
          {/* <Row >
        <Col xl="6" xs="12" md="6">
          <Button.Ripple
            // onClick={() => setcreateNewsLetter(true)}
            color="success"
            style={{ fontSize: "18px" }}
          >
            Create Orders
          </Button.Ripple>
        </Col>
      </Row> */}

    <Row className="card order-table">
    <Table hover>
      <thead>
        {
          Orders && Orders.length === 0 && <div className = "card" style={{textAlign:"center", paddingTop:"15px"}}>
            <h2>No Orders</h2>
          </div>
        }
        {Orders && Orders.length > 0 && <tr>
          <th>Order date</th>
          {/* <th>Order id</th> */}
          <th>Customer</th>
          <th>Amount</th>
          <th>No of tokens</th>
          <th>Currency</th>
          <th>Edit</th>
          <th>Status</th>
        </tr>}
      </thead>
      <tbody>
        {Orders && Orders.length > 0 && Orders.map((order) => {
          return (
          <tr>
                <th scope="row">{order.created_at}</th>
                <td>Dev</td>
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
          )
        })}
      </tbody>
    </Table>
    </Row>
        </div>
    )
}

export default Orders
