import React from 'react';
import { Button, Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/logo/HealhtyCarely.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar className="nav-bar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <NavLink className="mr-4" to="/home">Home</NavLink>
                        <NavLink className="mr-4" to="/login">Login</NavLink>
                    </Nav>
                    <Navbar.Text className="me-auto">
                        <Link className="mr-4" to="/login">Mark Otto</Link>
                    </Navbar.Text>
                    <Button className="mx-3">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;