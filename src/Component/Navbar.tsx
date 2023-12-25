import { Container, Row, Col } from "react-bootstrap";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs expand="lg" className="Navbar" sticky="top">
      <Container>
        <Row>
          <Col md={12} xs={12}>
            <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
            <NavbarBs.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link to="/" as={NavLink}>
                  Home
                </Nav.Link>
                <Nav.Link to="/AboutUs" as={NavLink}>
                  About Us
                </Nav.Link>
                <Nav.Link to="/ContactUs" as={NavLink}>
                  Contact US
                </Nav.Link>
              </Nav>
            </NavbarBs.Collapse>
          </Col>
        </Row>
      </Container>
    </NavbarBs>
  );
}
