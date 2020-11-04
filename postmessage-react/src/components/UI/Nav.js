import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import MessageIcon from '@material-ui/icons/Message';

/**
* @author
* @function Navigation
**/

const Navigation = (props) => {
  return(
    <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Link className="navbar-brand" to={`/postmessage`} >
      All <MessageIcon /> 
    </Link>
    <Nav>
      <Link className="nav-link" to={`/postmessage/insert`} >Insert Message</Link>
    </Nav>
  </Navbar>
   )

 }

export default Navigation