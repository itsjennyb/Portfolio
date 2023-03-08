import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container } from 'react-bootstrap';
import { FaFileDownload } from 'react-icons/fa';

function Resume() {
    return (
      <>
        <Header />
        <div className="container bg-black" style={{ marginTop: '20px' }}>
          <Container style={{ padding: '20px' }}>
            <h1 className="text-center text-white">My Resume</h1>
            <div className="text-center text-white" style={{ marginTop: '20px' }}>
                <h4>My Stack</h4>
                <p>Mongo, Express, React, Node,</p>
                <p>JavaScript, MySQL, jQuery, HTML, CSS</p>
                <p>Download My Resume:</p>

            <a href="https://docs.google.com/document/d/1th6wrCQYhYJhtRtong2ug06ay4FCz_Ty3CaAh2D-9fY/export?format=pdf" download style={{ color: 'white', fontSize: '3em' }}>
                <FaFileDownload />
            </a>
            </div>
          </Container>
        </div>
        <Footer />
      </>
    );
}

export default Resume;
  