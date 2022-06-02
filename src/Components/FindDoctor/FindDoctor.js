import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Tick from '../../images/icons/Group 3.png'
import Doctor2 from '../../images/banner_images/female-doctor_fococlipping_removed 1.png'
import Group1 from '../../images/banner_images/Group 1.png'
import './FindDoctor.css'

const FindDoctor = () => {
    return (
        <section className="find-doctor-section">
            <Container>
                <Row
                    className="find-doctor-row"
                    xm={12}
                    md={6}
                    lg={6}
                >
                    <Col>
                        <h5 className="text-blue">Find Doctor</h5>
                        <h2 className="mt-4">Find the right doctor according<br />to your complaint</h2>
                        <p className="text-secondary mt-4">HealthCare.ly is a free, health app that goes beyond matching you with doctors.
                            It actively helps you find the right doctor based on your medical and personal
                            needs and connects you with your HealthCarely community for ongoing
                            support throughout your journey to healthier living.
                        </p>
                        <div className="find-doctors-feature mt-4">
                            <Row xm={6}>
                                <Col sm="auto" className="tick-sign">
                                    <Image src={Tick}></Image>
                                </Col>
                                <Col>
                                    <p>100% free app designed to help you find the right doctor for you</p>
                                </Col>
                            </Row>
                            <Row xm={6}>
                                <Col sm="auto" className="tick-sign">
                                    <Image src={Tick}></Image>
                                </Col>
                                <Col>
                                    <p>Available 900 doctors specialist</p>
                                </Col>
                            </Row>
                        </div>
                        <Button className="see-the-doctors-btn mt-4">See the Doctors</Button>
                    </Col>
                    <Col className="see-the-doctor-right-side">
                        <div className="find-doctprs-card">
                            <h4 className="mt-3">Available Doctors</h4>
                            <p>Select Doctors</p>
                            <Row className="mt-3">
                                <Col className="d-flex align-items-center">
                                    <Image src={Group1}></Image>
                                    <div className="ml-3">
                                        <h4>Dr. Adinda</h4>
                                        <p>Eye Specialist</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="d-flex align-items-center">
                                    <Image src={Group1}></Image>
                                    <div className="ml-3">
                                        <h4>Dr. Adinda</h4>
                                        <p>Eye Specialist</p>
                                    </div>
                                </Col>
                            </Row>
                            <Button className="find-doctor-btn mt-3">Find Doctor</Button>
                        </div>
                        <Image className="see-the-doctor-image" src={Doctor2}></Image>
                        <div className="circle"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FindDoctor;