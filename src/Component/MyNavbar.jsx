
import React, { useState } from 'react'
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

import Login from "../Component/lOGIN/Login"






export const MyNavbar = () => {
const [nav,setNavbar]=useState(false)
  const changeNavbarBackground = () => {
    if (window.scrollY >= 52) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
   
  };
  window.addEventListener("scroll", changeNavbarBackground);
  
console.log(nav)

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

          <Navbar collapseOnSelect expand="lg"  

                className={nav ? "nav active" : "nav"} 
                 >
            <Container >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                   <img src="https://assets.website-files.com/60819f9be381394642b5659e/6081a538174f4d6bc01bdd27_leadiq-logo.svg" alt="lead" />
                  {/*  */}
                  <NavDropdown style={{marginLeft:"50%" , }}    title="Why LeadIQ"  id="co"
                  
                
                  
                  >
                    <NavDropdown.Item  href="#action/3.1">Features</NavDropdown.Item>
                    <NavDropdown.Item  href="#action/3.2">

                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Succuss Stories</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">  </NavDropdown.Item>

                  </NavDropdown>
                  {/* 2 */}

                
                  <NavDropdown   title="Solution" id="col">
                  <div style={{display:"flex"}}>
                    <NavDropdown.Item    href="#action/3.1">By UseCase </NavDropdown.Item>
                    <NavDropdown.Item  style={{marginLeft:"70px"}}  href="#action/3.3"> By Role</NavDropdown.Item>
                    </div>
                   
                     <div style={{display:"flex"}}>
                    <NavDropdown.Item    href="#action/3.1">Eliminating Busy Work </NavDropdown.Item>
                    <NavDropdown.Item style={{marginLeft:"10px"}}   href="#action/3.3">Sales Leaders</NavDropdown.Item>
                    </div>
                    
                    <div style={{display:"flex"}}>
                    <NavDropdown.Item    href="strategic">Strategic </NavDropdown.Item>
                    <NavDropdown.Item   href="revenue">Revenue Operation</NavDropdown.Item>
                    </div>
                    
                    <div style={{display:"flex"}}>
                    <NavDropdown.Item    href="data">Data Accuracy </NavDropdown.Item>
                    <NavDropdown.Item   href="sales">Sales Professionals</NavDropdown.Item>
                    </div>
                    <NavDropdown.Divider />
                  </NavDropdown>
             

                  {/*2  */}
                  <NavDropdown title="Resources" id="coll">
                    <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="support">Support</NavDropdown.Item>
                    <NavDropdown.Item href="careers">Careers</NavDropdown.Item>
                    <NavDropdown.Item href="press">Press</NavDropdown.Item>
                    <NavDropdown.Item href="privacy">Privacy Center</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">

                    </NavDropdown.Item>
                  </NavDropdown>
                  {/*  */}
                  <Nav.Link style={{ color: "white" }} href="#pricing">Pricing </Nav.Link>



                </Nav>
                <Nav>
                 <Button className="demo">Book a demo</Button>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>






        </div>
      </div>
    </>






  )
}
