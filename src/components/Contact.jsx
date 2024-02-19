import React, { useState, useEffect } from 'react'; 
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './Portfolio.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, subject, message });
    }


    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,
        });


        const handleScroll = () => {
            AOS.refresh();
        };


        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Element name="contact" className="contact-section">
      <div className="grid-container">
      <Container className="my-5">
        <Row>
            <Col>
                <h2 className="text-center mb-5">Contact</h2>
            </Col>
        </Row>
                <Row>
                    <Col md={6} data-aos="fade-left">
                        <Card>
                            <Card.Body>
                                <Card.Title>Contact Information</Card.Title>
                                <Card.Text>
                                    <div>Location: A108 Adam Street, New York, NY 535022</div>
                                    <div>Email: info@example.com</div>
                                    <div>Call: +1 5589 55488 55</div>
                                </Card.Text>
                                {/* Google Maps iframe */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9026347263375!2d-74.00858488414177!3d40.71364857933115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a56f63a80e9%3A0x60d8e2c2f6d2d1e4!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1647451766874!5m2!1sen!2sus"
                                    width="400"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-right">
                        <Card>
                        <Card.Body>
                            <Card.Title>Send a Message</Card.Title>
                            <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send Message
                        </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
        </Element>
    );
}

export default Contact;
