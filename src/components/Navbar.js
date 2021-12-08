import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Dropdown } from 'react-bootstrap';
import logo from './logo.png';

export default function Header() {
    return (
        <div>
            {/*  Nav */}

            <Navbar collapseOnSelect expand="lg" variant="light" style={{ color: 'black', backgroundColor: 'white' }}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">THIS IS HOW IT WORKS</Nav.Link>
                            <Nav.Link href="#pricing">TOP PRODUCTS</Nav.Link>
                            <NavDropdown title="Deals" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">REQUEST OFFER</Nav.Link>
                            <Nav.Link href="#pricing">FOR PRIVATE CUSTOMERS</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><Button variant="outline-primary">Log In</Button></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="danger">to Register</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Dropdown>
                    <Dropdown.Toggle
                        variant=""
                        id="dropdown-basic">
                        <h5>Categories</h5>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                        <Dropdown.Item href="#" >Arabic</Dropdown.Item>
                        <Dropdown.Item href="#">English</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </div>
    )
}



