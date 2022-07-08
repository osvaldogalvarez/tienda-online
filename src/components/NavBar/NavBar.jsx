//@ts-check
import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { FcRadarPlot } from "react-icons/fc"
import { CartWidget } from "./CartWidget"
import "./NavBar.scss"
import { Link } from "react-router-dom"

export const NavBar =() => {
  return (
<Navbar bg="dark" variant="dark" id='nav-bar' >
  <Container>
    
    <Navbar.Brand>
      <Link to= {"/"} id= "brand" >
    <FcRadarPlot className='sz' />
      Compuworld
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link>Inicio</Nav.Link>
        <Nav.Link>Contacto</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown" >
          <NavDropdown.Item>
            <Link to={"/category/bes"} className='acord' >
            Serie bes
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to={"/category/pro"}>
            Serie pro
          </Link>  
          </NavDropdown.Item>
          <NavDropdown.Item>
          <Link to={"/category/gamers"}> 
            Serie gamers
          </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <CartWidget/>
  </Container>
</Navbar>
  )
}
