import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../Assets/logo color.png";
import "./navbar.css";
function Navbarc() {
  return (
    <div>
      <Navbar className="mt-3" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="logo">
            <img src={logo} alt="log" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="justify-content-end"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mb-auto" style={{ fontSize: 20 }}>
              <Nav.Link className="mx-3" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                about
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                Schedule
              </Nav.Link>
              <Nav.Link className="mx-3" href="#home">
                register
              </Nav.Link>
              <Nav.Link className="mx-3" href="#link">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarc;
