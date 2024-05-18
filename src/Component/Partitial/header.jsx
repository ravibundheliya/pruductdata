import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';

function Header() {
  const cartvalue = useSelector((state)=>state.cart.value); 
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className="footerclr pt-4 pb-4" style={{ backgroundColor: "lightgray" }}>
          <Container>
            <Navbar.Brand className='logo'>
              <Link to="/">
                <img src={require('../../img/asset 0.png')} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  AZEDW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="phl justify-content-center flex-grow-1 pe-3">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                  </Nav.Item>
                  <NavDropdown className='drp' title="Products" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item as={Link} to="/blazerandsuit">Blazer & Suits</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/jodhpuri">Jodhpuri</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/indowestern">Indo Western</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/sherwani">Sherwani</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/kotikurta">Koti-Kurta</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/cart">Cart ({cartvalue.length})</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Button variant="outline-dark">Logout</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header
