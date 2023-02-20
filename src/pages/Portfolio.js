import { Container, Row, Col } from 'react-bootstrap';
import Projects from '../components/Projects';

function Portfolio() {
  const projects = [
    {
      name: 'Project 1',
      image: '/path/to/image1.jpg',
      githubLink: 'https://github.com/myusername/project1',
      deployLink: 'https://project1.com'
    },
    {
      name: 'Project 2',
      image: '/path/to/image2.jpg',
      githubLink: 'https://github.com/myusername/project2',
      deployLink: 'https://project2.com'
    },
    {
      name: 'Project 3',
      image: '/path/to/image3.jpg',
      githubLink: 'https://github.com/myusername/project3',
      deployLink: 'https://project3.com'
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="my-3">
            <Projects 
              name={project.name} 
              image={project.image} 
              githubLink={project.githubLink} 
              deployLink={project.deployLink} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;