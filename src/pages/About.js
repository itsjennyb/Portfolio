import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import biopic from '../images/biopic.jpg'

function About() {
  return (
    <div id="about">
      <Container style={{ padding: '20px', marginTop: '80px', backgroundColor: 'black' }}>
        <Row className="align-items-center">
          <Col md={12} className="text-center mb-4 text-white">
            <h1>Hi, it's me!</h1>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <img
              src={biopic}
              alt="jennifer"
              style={{ width: '50%', height: 'auto', borderRadius: '10px', filter: 'grayscale(100%)' }}
            />
          </Col>
          <Col md={8}>
            <div className="text-left text-white">
              <p>
                I'm currently a student of a coding bootcamp at UT of Austin.
                I'm interested in becoming a software engineer in the near future and open to any work experience that'll help me get there.
                <br />
                <br />
                <span>
                  I graduated from Purdue University with a degree in Hospitality Management and a minor in Account & Finance.
                  But after working several years in hotels and wealth management, I decided on a career change to tech.
                </span>
                <br />
                <br />
                <span>
                  Currently adjusting to life in Leander, Texas, with my husband, our three children, and our dog, Charlie.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;