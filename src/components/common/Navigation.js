import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

// msal imports
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export default function Navigation() {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  return (
    <Navbar variant="default" style={{ background: "#3b88d1" }}>
      <Container>
        <Navbar.Brand>
          <h1 style={{ color: "#fee440" }}>DE Companion</h1>
        </Navbar.Brand>
        <Nav className="me-auto nav-text">
          <a href="/">Home</a>
          <a href="/tasks">Tasks</a>
        </Nav>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Container>
    </Navbar>
  );
}
