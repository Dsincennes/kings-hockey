import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {
  return (
    <Navbar bg='purple' expand="lg">
      <Container>
        <Navbar.Brand as={Link} to ="/">KINGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/polls">Polls</Nav.Link>
            <Nav.Link as={Link} to="/stats">Stats</Nav.Link>
            <Nav.Link as={Link} to="/standings">Standings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
