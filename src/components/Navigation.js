import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">about</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">portfolio</Nav.Link>
            <Nav.Link as={Link} to="/contact">contact</Nav.Link>
            <Nav.Link as={Link} to="/resume">resume</Nav.Link>
            <Nav.Link as={Link} to="https://www.buymeacoffee.com/jblac">buy me a coffee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;