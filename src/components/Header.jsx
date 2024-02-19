import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaXTwitter, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaHome, FaUser, FaFile, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="flex-column align-items-center" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-center my-4">
        <img src="src/assets/profile-picture.jpg" alt="Profile" className="rounded-circle mb-3" style={{ width: '80px', height: '80px' }} />
        <h5 className="nav-link">Michal Paleczny</h5>
      </Navbar.Brand>
      <Nav className="social-media-links d-flex justify-content-around w-100 mb-4">
        <Nav.Link href="https://twitter.com/yourusername" target="_blank"><FaXTwitter /></Nav.Link>
        <Nav.Link href="mailto:your.email@example.com"><FaEnvelope /></Nav.Link>
        <Nav.Link href="https://wa.me/yourwhatsappnumber" target="_blank"><FaWhatsapp /></Nav.Link>
        <Nav.Link href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedinIn /></Nav.Link>
        <Nav.Link href="https://github.com/yourusername" target="_blank"><FaGithub /></Nav.Link>
      </Nav>
      <Nav className="flex-column w-100">
        <ScrollLink to="home" className="nav-link m-2" spy={true} smooth={true} duration={500}><FaHome /> Home</ScrollLink>
        <ScrollLink to="about" className="nav-link m-2" spy={true} smooth={true} duration={500}><FaUser /> About</ScrollLink>
        <ScrollLink to="resume" className="nav-link m-2" spy={true} smooth={true} duration={500}><FaFile /> Resume</ScrollLink>
        <ScrollLink to="portfolio" className="nav-link m-2" spy={true} smooth={true} duration={500}><FaBriefcase /> Portfolio</ScrollLink>
        <ScrollLink to="contact" className="nav-link m-2" spy={true} smooth={true} duration={500}><FaEnvelope /> Contact</ScrollLink>
      </Nav>
      <Navbar.Brand className="mt-auto">
        <h6>© 2024 Michal Paleczny</h6>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
