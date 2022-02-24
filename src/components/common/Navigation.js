import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar variant="default" style={{ background: "#3b88d1" }}>
      <Container>
        <Navbar.Brand>
          <h1 style={{ color: "#fee440" }}>DE Companion</h1>
        </Navbar.Brand>
        <Nav className="me-auto nav-text">
          <Link to="/">Home</Link>
          <Link to="/tasks">Tasks</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
