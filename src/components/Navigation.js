import React from 'react';
// import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#portfolio">portfolio</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
            <Nav.Link href="https://www.buymeacoffee.com/jblac">buy me coffee?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// function Navigation() {
//   return (
//     <div className="navContainer">
//         <div className="navContent">
//             <Link to="/about">About</Link>
//             <Link to="/portfolio">Portfolio</Link>
//             <Link to="/contact">Contact</Link>
//             <span>{/* github */}</span>
//             <span>{/* linkedin */}</span>
//         </div>
//     </div>
//   );
// }

export default Navigation;