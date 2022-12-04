import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="bg-dark ">
      <Container  >
        <Navbar bg="dark" variant="dark" expand="lg" >
          <Navbar.Brand>
            <Link to="/" className="text-light">
              React-Sam
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="  mx-auto gap-3  ">
              <Link to="/" className="text-light px-5">
                {" "}
                Home
              </Link>
              <Link to="/login" className="text-light px-5">
                Login
              </Link>
              <Link to="/profile" className="text-light px-5">
                Profile
              </Link>
              <Link to="/fetch" className="text-light px-5">
                {" "}
                Fetch
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
