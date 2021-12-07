import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Userman</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Liste</Nav.Link>
                        <Nav.Link href="/hinzufuegen">Hinzufügen</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;