import React, { useState }from 'react';
import { Card, Button } from 'react-bootstrap';

function Projects({ name, image, githubLink, deployLink, styles }) {
    const [hover, setHover] = useState(false);

    return (
    <Card style={hover ? { ...styles.card, ...styles.cardHover } : styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Card.Title variant="top" style={styles.title}>{name}</Card.Title>
      <Card.Img src={image} alt={name} style={styles.image}/>
      <Card.Body>
        <div style={styles.buttonContainer} className="d-flex justify-content-center">
          <Button href={githubLink} variant="primary" className="me-3" style={styles.button}>
            GitHub
          </Button>
          <Button href={deployLink} variant="secondary" style={styles.button}>
            Deployed Page
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Projects;