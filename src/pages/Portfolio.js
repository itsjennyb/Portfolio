import { Container, Row, Col } from 'react-bootstrap';
import Projects from '../components/Projects';

import busybeeImg from '../images/busybee.png';
import localfoodieImg from '../images/localfoodie.png';
import techblogImg from '../images/techblog.png';
import texteditorImg from '../images/texteditor.png';
import ecommbeImg from '../images/ecommbe.png';
import readmegenImg from '../images/readmegen.png';

function Portfolio() {
  const projects = [
    {
        name: 'Busy Bee',
        image: busybeeImg,
        githubLink: 'https://github.com/itsjennyb/Busy-Bee',
        deployLink: 'https://lit-beach-45684.herokuapp.com/'
    },
    {
        name: 'The Local Foodie',
        image: localfoodieImg,
        githubLink: 'https://github.com/itsjennyb/The-Local-Foodie',
        deployLink: 'https://itsjennyb.github.io/The-Local-Foodie/'
    },
    {
        name: 'Tech Blog',
        image: techblogImg,
        githubLink: 'https://github.com/itsjennyb/Tech-Blog',
        deployLink: 'https://jens-tech-blog.herokuapp.com/'
    },
    {
        name: 'Text Editor (PWA)',
        image: texteditorImg,
        githubLink: 'https://github.com/itsjennyb/Text-Editor',
        deployLink: ''
    },
    {
        name: 'E-Commerce (BackEnd)',
        image: ecommbeImg,
        githubLink: 'https://github.com/itsjennyb/E-Comm-BackEnd',
        deployLink: ''
    },
    {
        name: 'README Generator',
        image: readmegenImg,
        githubLink: 'https://github.com/itsjennyb/README-Generator',
        deployLink: ''
    }    
];

return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center mb-5">
          <h1>My Portfolio</h1>
        </Col>
      </Row>
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