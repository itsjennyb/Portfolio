import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <Container fluid className="bg-dark text-light text-center py-3" style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <a href="https://github.com/itsjennyb" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
          <FaGithub size={30} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/jblac/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
          <FaLinkedin size={30} color="white" />
        </a>
        <a href="https://stackoverflow.com/users/19847934/itsjennyb" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}>
          <FaStackOverflow size={30} color="white" />
        </a>
      </div>
      <p style={{ marginTop: "5px" }}>Jennifer Blacutt &copy; 2023</p>
    </Container>
  );
}

export default Footer;