import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed-top" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link
                className="text-success text-decoration-none fs-3 fw-bold"
                to="/"
              >
                F<span className="text-light">oo</span>diesHub
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link className="text-light text-decoration-none fs-3 fw-bold" to="/">Home</Nav.Link>
                <Nav.Link className="text-light text-decoration-none fs-3 fw-bold" to="/about">About Us</Nav.Link>
                <Nav.Link className="text-light text-decoration-none fs-3 fw-bold" to="/blog">Blog</Nav.Link>
                <Nav.Link className="text-light text-decoration-none fs-3 fw-bold" to="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
