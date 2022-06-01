import React from 'react';
import { Button, Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/HealhtyCarely.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Navbar.Text className="me-auto">
                        <Link to="/login">Mark Otto</Link>
                    </Navbar.Text>
                    <Button className="mx-3">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;