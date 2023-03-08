import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data
  };

  return (
    <div className="d-flex justify-content-center bg-black p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </Form.Group>

        <div className="text-center margin">
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
