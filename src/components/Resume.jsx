import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'aos/dist/aos.css';
import resumeImage from '../assets/CV-Picture.jpg';
import resumePDF from '../assets/CV Michal Paleczny.pdf';
import './style.css';

const Resume = () => {
  return (
      <Element name="resume" className="resume-section">
          <div className="grid-container mb-5">
          <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center title">Resume</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
        <Col md={6} data-aos="fade-left">
        <h4>Michal Paleczny</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>

              <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>
           
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
          </Col>
          <Col md={6} data-aos="fade-right" className="mt-3">
            <img src={resumeImage} alt="My Resume" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="mt-3 align-items-center">
              <Button href={resumePDF} download="My_Resume.pdf" variant="primary">Download My CV</Button>
            </div>
          </Col>
        </Row>
      </Container>
          </div>
      </Element>
  );
}

export default Resume;
