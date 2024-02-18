import React from 'react';
import { Element } from 'react-scroll';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import resumeImage from '../assets/CV-Picture.jpg';
import resumePDF from '../assets/CV Michal Paleczny.pdf';
import './Portfolio.css';

const Resume = () => {
  return (
      <Element name="Resume" className="resume-section">
          <div className="grid-container">
          <Container className="my-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center">Resume</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
        <Col md={6}>
            <p>Here's a brief overview of my professional experience and skills. Please download the full resume for more detailed information.</p>
          </Col>
          <Col md={6}>
            <img src={resumeImage} alt="My Resume" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="mt-3">
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
