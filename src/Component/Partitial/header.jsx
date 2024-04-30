import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className="footerclr pt-4 pb-4" style={{backgroundColor:"lightgray"}}>
          <Container>
            <Navbar.Brand href="/" className='logo'>
              <img src={require('../../img/asset 0.png')} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  AZEDW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="phl justify-content-center flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <NavDropdown className='drp' title="Products" id={`offcanvasNavbarDropdown-expand-lg`}>
                    <NavDropdown.Item><Link to="/blazerandsuit">Blazer & Suits </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/jodhpuri"> Jodhpuri </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/indowestern"> Indo Western </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/sherwani"> Sherwani </Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/kotikurta"> Koti-Kurta </Link></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to="blog">Blog</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="about">About</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="contact">contact</Link>
                  </Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  <Button variant="outline-dark">Logout</Button>
                {/* </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header
