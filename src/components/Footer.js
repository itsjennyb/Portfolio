import React from 'react';

import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className="bg-dark text-light text-center py-3" style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <p>Jennifer Blacutt &copy; 2023</p>
    </Container>
  );
}

export default Footer;
