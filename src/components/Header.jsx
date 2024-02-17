import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaXTwitter, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { FaHome, FaUser, FaFile, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="flex-column align-items-center" style={{ width: '250px', height: '100vh', position: 'fixed' }}>
      <Navbar.Brand as={Link} to="/" className="my-4">
        <img src="../assets/profile-picture.jpg" alt="Profile" className="rounded-circle mb-3" style={{ width: '80px', height: '80px' }} />
        <h5 className="text-white">Michal Paleczny</h5>
      </Navbar.Brand>
      <Nav className="social-media-links d-flex justify-content-around w-100 mb-4">
        <Nav.Link href="https://twitter.com/yourusername" target="_blank"><FaXTwitter /></Nav.Link>
        <Nav.Link href="mailto:your.email@example.com"><FaEnvelope /></Nav.Link>
        <Nav.Link href="https://wa.me/yourwhatsappnumber" target="_blank"><FaWhatsapp /></Nav.Link>
        <Nav.Link href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedinIn /></Nav.Link>
        <Nav.Link href="https://github.com/yourusername" target="_blank"><FaGithub /></Nav.Link>
      </Nav>
        <Nav className="flex-column w-100">
        <Nav.Link as={Link} to="/" className="nav-text-icon"><FaHome /> Home</Nav.Link>
        <Nav.Link as={Link} to="/about" className="nav-text-icon"><FaUser /> About</Nav.Link>
        <Nav.Link as={Link} to="/resume" className="nav-text-icon"><FaFile /> Resume</Nav.Link>
        <Nav.Link as={Link} to="/portfolio" className="nav-text-icon"><FaBriefcase /> Portfolio</Nav.Link>
        <Nav.Link as={Link} to="/contact" className="nav-text-icon"><FaEnvelope /> Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;