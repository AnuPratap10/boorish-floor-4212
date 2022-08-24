
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import style from "./MyCss/style.module.css"
// 
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'


export const MyNavbar = () => {
  return (

    <>
    <div classname="mainNavbar">
      <div className="firstDiv">
        <Navbar className="myFirstNav" >
          <Nav className="upper" >
            <Nav.Link style={{ color: "white" }} href="#privacy">Privacy Center</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#support">Support</Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#login">Login  </Nav.Link>
          </Nav>

        </Navbar>
      </div>
{/* ..........................................................................................sec................................ */}
      <div className="secDiv">
        <Navbar collapseOnSelect expand="lg" className="sdn"  >
          <Container className="secContainer" >

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
              <Nav className="lead">
              <img  src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="" />
                <Nav.Link style={{marginLeft:"40%",color:"white"}}   href="#features">WhyLeadIQ</Nav.Link>

                
                <Nav.Link style={{ color: "white" }}  href="#pricing">Solutions</Nav.Link>
                <Nav.Link style={{ color: "white" }}  href="#deets">Resources</Nav.Link>
                <Nav.Link style={{ color: "white" }}  href="#deets">Pricing</Nav.Link>
              </Nav>
              <Nav>
               
              <Button className="demo">Book a Demo</Button>
              </Nav>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
{/* ........................................................................................................... */}



{/* <div className="na">
  <div ClassName="dropdown">
    <button ClassName="dropbtn">Dropdown 
      <i ClassName="fa fa-caret-down"></i>
    </button>
    <div ClassName="dropdown-content">
    <div ClassName="vv" >
          <Link href="#">Link 1</Link>
      <Link href="#">Link 2</Link>
    </div>
      <Link href="#">Link 1</Link>
      <Link href="#">Link 2</Link>
      <Link href="#">Link 3</Link>
    </div>
  </div> 
</div> */}



      </div>



      </div>
    </>






  )
}
