import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar'
import FemaleDoctor1 from '../../images/banner_images/female doctor_fococlipping_removed 1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <NavBar />
            <div fluid className="body">
                <Container>
                <Row xm={12} md={6} lg={6} className="row row-cols-lg-6 row-cols-md-6 d-flex justify-content-center align-items-center">
                    <Col className="container">
                        <Container>
                            <h2 className="left-header-banner-text">Medical Care Now<br />Simplified For <span className="text-blue">Everyone</span></h2>
                            <p>Health carely is a new way to get health insurance quotes. We offer tools similar to those
                                provided by insurance companies for free and prices are based on donations and not
                                restrictive health plan networks.
                            </p>
                            <Button>Contact Us</Button>
                        </Container>
                    </Col>
                    <Col className="banner-img-holder">
                        <div className="myCard"></div>
                        <Image className="header-banner-img" src={FemaleDoctor1}></Image>
                        <div className="ellips"></div>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Header;