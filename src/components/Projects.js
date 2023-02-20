import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Project({ name, image, githubLink, deployLink }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div className="d-flex justify-content-center">
          <Button href={githubLink} variant="primary" className="me-3">
            GitHub
          </Button>
          <Button href={deployLink} variant="secondary">
            Deployed Page
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;