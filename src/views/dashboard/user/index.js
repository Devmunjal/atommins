import React from 'react'
import {Row, Col} from 'reactstrap'
function User() {
    return (
        <div>
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
        </div>
    )
}

export default User
