import React, { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand to="/">Car booking System</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              {/* <Link className="nav-link" to="rooms">Rooms</Link> */}

              {this.props.loggedIn ? (
                <NavDropdown title="Options" id="basic-nav-dropdown">
                  {/* {this.props.role === "Receptionist"? */}
                  <div>
                    <LinkContainer to="/addcar">
                      <NavDropdown.Item>Register Car</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/addDriver">
                      <NavDropdown.Item>Register Driver</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/addGurantor">
                      <NavDropdown.Item>Register Guarantor</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/addCustomer">
                      <NavDropdown.Item>Register Customer</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/addDealer">
                      <NavDropdown.Item>Register Dealer</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to="/checkout">
                      <NavDropdown.Item>Check-out</NavDropdown.Item>
                    </LinkContainer>
                  </div>
                  {/* :""} */}

                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item to="action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              ) : (
                ""
              )}

              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav>
            {this.props.loggedIn ? (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
