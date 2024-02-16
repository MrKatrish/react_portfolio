import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importujemy Navbar i Nav z react-bootstrap
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="light"> {/* Ustawiamy kolor tła na jasny i opcję rozszerzenia na large */}
      <Navbar.Brand as={Link} to="/">Your Name</Navbar.Brand> {/* Używamy Navbar.Brand z Link do nawigacji */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link> {/* Używamy Nav.Link z Link do nawigacji */}
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link> {/* Używamy Nav.Link z Link do nawigacji */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
