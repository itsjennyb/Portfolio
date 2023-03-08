import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
    <Header />
    <div className="container bg-black" style={{ marginTop: '20px' }}>
        <Container style={{ padding: '20px' }}>
        <h1 className="text-center text-white">Contact me</h1>
        <div className="text-center text-white">
            <p style={{ marginTop: '20px' }}><FaPhone />  213-284-4878</p>
            <p><FaEnvelope />  jenny@blacutt.com</p>
        </div>
        <p className="text-center text-white"> or inquire by form:</p>
        <Form />
        </Container>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
