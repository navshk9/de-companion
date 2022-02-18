import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar variant="default" style={{ background: "#FFAAA7" }}>
      <Container>
        <Navbar.Brand>DE Companion</Navbar.Brand>
        <Nav className="me-auto nav-text">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
