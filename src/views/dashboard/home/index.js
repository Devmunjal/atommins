import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Button} from 'reactstrap'


function HomePage() {
    return (
        <div>
            <Row>
                <Col xl="4" xs="6" md="4">
                    <div className="card" style={{textAlign:"center", padding:"10px"}}>
                        <h3>Total Users</h3>
                        <h4>
                            50
                        </h4>
                    </div>
                </Col>
                <Col xl="4" xs="6" md="4">
                    <div className="card" style={{textAlign:"center", padding:"10px"}}>
                        <h4>Total Orders</h4>
                        <h4>
                            50
                        </h4>
                    </div>
                </Col>
                <Col xl="4" xs="12" md="4">
                    <div className="card" style={{textAlign:"center", padding:"10px"}}>
                        <h3>Total Fund Raise</h3>
                        <h4>
                            50
                        </h4>
                    </div>
                </Col>
                <Col xl="12" xs="12" md="12">
                    <div className="card" style={{textAlign:"center", padding:"10px"}}>
                        <h3>Total Purchase In Last 24 Hours</h3>
                        <h4>
                            50
                        </h4>
                    </div>
                </Col>
            </Row>
            <div className="divider">
            </div>
            <Row>
                <Col xl="3" md="3" xs="6" >
                    <Link to="/dashboard/newsletter">
                        <div className="card" style={{textAlign:"center", padding:"10px"}}>
                                <h3>NewsLetter</h3>
                        </div>
                    </Link>
                </Col>
                <Col xl="3" md="3" xs="6" >
                    <Link to="/dashboard/company">
                        <div className="card" style={{textAlign:"center", padding:"10px"}}>
                                <h3>Companies</h3>
                        </div>
                    </Link>
                </Col>
                <Col xl="3" md="3" xs="6" >
                    <Link to="/dashboard/event">
                        <div className="card" style={{textAlign:"center", padding:"10px"}}>
                                <h2>Events</h2>
                        </div>
                    </Link>
                    
                </Col>
                
                <Col xl="3" md="3" xs="6" >
                <Link to="/dashboard/user">
                        <div className="card" style={{textAlign:"center", padding:"10px"}}>
                                <h2>User</h2>
                        </div>
                    </Link>
                </Col>
                <Col xl="12" md="12" xs="12" >
                <Link to="/dashboard/order">
                        <div className="card" style={{textAlign:"center", padding:"10px"}}>
                                <h2>Orders</h2>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
