import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './index.scss';

const Header = () => {
  return (
    <Navbar bg='primary' expand="lg">
      <Container>
        <Navbar.Brand href="/">Gavin is gay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Nav.Link href="#features">Calendar</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#about">Polls</Nav.Link>
            <Nav.Link href="#about">Stats</Nav.Link>
            <Nav.Link href="#about">Standings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
