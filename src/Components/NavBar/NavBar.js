import React from 'react';
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Logo from '../../images/logo/HealhtyCarely.png'
import './NavBar.css'

const NavBar = () => {
    const { user, googleSignOut } = useAuth();

    // handle google sign out
    const handleGoogleSignOut = () => {
        googleSignOut();
    }
    //console.log(user.displayName)

    return (
        <Navbar className="nav-bar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={Logo}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Link className="mr-4" to="/home">Home</Link>
                        <Link className="mr-4" to="/aboutUs">About Us</Link>
                        <Link className="mr-4" to="/services">Services</Link>
                        <Link className="mr-4" to="/find-doctor-section">Doctors</Link>
                        {!user.email && <Link className="mr-4" to="/Register">Register</Link>}
                        {user?.email
                            ? <Button className="mr-4" onClick={handleGoogleSignOut}>Log Out</Button>
                            : <Link className="mr-4" to="/login">Login</Link>
                        }
                    </Nav>
                    <Navbar.Text className="me-auto">
                        {
                            user.displayName && <p className="mr-4">{user.displayName}</p>
                        }

                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;