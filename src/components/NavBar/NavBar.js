import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CardWidget from '../CartWidget/CardWidget'

export const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border-bottom p-4">
                <Container>
                    <Navbar.Brand href="#home" className="fs-1 me-4">Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fs-4">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Nosotros</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Productos 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Productos 2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Productos 3</NavDropdown.Item>
                                {/* <NavDropdown.Divider/> */}
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className="mt-md-3">Crear cuenta</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className="mt-md-3">Iniciar sesión</Nav.Link>
                            <CardWidget text=" Carrito 6"/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar