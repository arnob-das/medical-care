import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import FemaleDoctor1 from '../../images/banner_images/female doctor_fococlipping_removed 1.png'
import Group1 from '../../images/banner_images/Group 1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div fluid="true" className="header-container my-5">
                <Container>
                    <Row xm={12} md={6} lg={6} className="row row-cols-lg-6 row-cols-md-6 d-flex justify-content-center align-items-center">
                        <Col className="container">
                            <Container>
                                <h2 className="left-header-banner-text">Medical Care Now<br />Simplified For <span className="text-blue">Everyone</span></h2>
                                <p className="mt-3">Health carely is a new way to get health insurance quotes. We offer tools similar to those
                                    provided by insurance companies for free and prices are based on donations and not
                                    restrictive health plan networks.
                                </p>
                                <Button className="contact-us-btn mt-4">Contact Us</Button>
                            </Container>
                        </Col>
                        <Col className="banner-img-holder">
                            <div className="myCard">
                                <Card className="align-items-center text-center">
                                    <Card.Img className="mt-3" variant="top" style={{ width: '50px' }} src={Group1} />
                                    <Card.Body>
                                        <Card.Title>Dr. Shimanta</Card.Title>
                                        <Card.Text>Skin Specialist</Card.Text>
                                        <Button className="btn-blue" variant="">Make Schedule</Button>
                                    </Card.Body>
                                </Card>
                            </div>
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