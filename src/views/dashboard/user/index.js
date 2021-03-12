import React, { useEffect, useState } from 'react'
import {Row, Col, Button, Table} from 'reactstrap'
function User() {
    const [users, setusers] = useState([])
    function getAllUsers() {
      fetch('https://i6e6us62u7.execute-api.us-east-1.amazonaws.com/dev/allusers', {
        headers:{
          "Content-Type": "application/json",
          "x-access-token": `${localStorage.getItem('token')}`
        }
      }).then(resp => resp.json()).then((resp) => setusers(resp.result))
    }
    useEffect(() => {
      getAllUsers()
      return () => { }
    }, [])
    return (
        <div>
        <Row  className="card user-table">
        <Table hover>
            {
              users && users.length === 0 && <div className="card" style={{textAlign:"center", paddingTop:"15px"}}>
                <h2>No Users</h2>
              </div>
            }
            {users && users.length > 0 && <thead>
              <tr>
                <th>Name</th>
                <th>Wallet Address</th>
                <th>Country</th>
                <th>Email</th>
              </tr>
            </thead>}
            {users && users.length > 0 && users.map((user) => {
            return (<tbody>

              <tr>
                <th scope="row">{`${user.firstname} ${user.lastname}`}</th>
                <td>{user.walletAddress}</td>
                <td>{user.country}</td>
                <td>{user.email}</td>
              </tr>
            </tbody> 
            )
          }
            )}
          </Table>
        </Row>
        </div>
    )
}

export default User
