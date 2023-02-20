import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

  function About() {
    return (
      <div id="about">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">About Me</h1>
              <p className="text-center">
                Hi, it's me.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  export default About;