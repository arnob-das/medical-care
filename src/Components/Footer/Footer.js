import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/HealhtyCarely.png'
import Fb from '../../images/icons/facebook.png'
import Instagram from '../../images/icons/instagram.png'
import Twitter from '../../images/icons/twitter.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row >
                    <Col lg={6} className="footer-right">
                        <Image src={Logo}></Image>
                        <p className="footer-large-text">This free App provides a solution to your health needs by offering you a one-stop access to complete information about various medical checkups. This App carries simple tips and advice to help you maintain a healthy lifestyle.</p>
                    </Col>
                    <Col lg={6}>
                        <Row lg={3} className="footer-left">
                            <Col style={{ paddingRight: "0px" }}>
                                <h6>Overview</h6>
                                <div className="footer-large-text">
                                    <p>Checking Health</p>
                                    <p>Find A Doctor</p>
                                    <p>Make A Schedule</p>
                                </div>
                            </Col>
                            <Col style={{ paddingRight: "0px" }}>
                                <h6>Company</h6>
                                <div className="footer-large-text footer-link">
                                    <p><Link className="footer-link" to="/home">Home</Link></p>
                                    <p><Link className="footer-link" to="/aboutUs">About Us</Link></p>
                                    <p><Link className="footer-link" to="/services">Make A Schedule</Link></p>
                                </div>
                            </Col>
                            <Col style={{ paddingRight: "0px" }}>
                                <h6>Explore</h6>
                                <div className="footer-large-text">
                                    <p>Terms & Condition</p>
                                    <p>Privacy Policy</p>
                                    <p>Cookies</p>
                                </div>
                            </Col>
                            <Col style={{ paddingRight: "0px" }}>
                                <h6>Social Media</h6>
                                <div className="footer-large-text">
                                    <Link className="mr-2" to="/">
                                        <Image src={Fb}></Image>
                                    </Link>
                                    <Link className="mr-2" to="/">
                                        <Image src={Instagram}></Image>
                                    </Link>
                                    <Link className="mr-2" to="/">
                                        <Image src={Twitter}></Image>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;