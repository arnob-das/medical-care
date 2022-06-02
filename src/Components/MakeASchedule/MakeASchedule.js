import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Image3 from '../../images/banner_images/image 3.png'
import Tick from '../../images/icons/Group 3.png'
import './MakeASchedule.css'

const MakeASchedule = () => {
    return (
        <section id="makeASchedule" className="pt-3">
            <Container>
                <Row sm={12} md={6} className="align-items-center">
                    <Col className="left-col">
                        <div className="border-rotate"></div>
                        <Image className="schedule-banner-image" src={Image3}></Image>
                    </Col>
                    <Col>
                        <h5 className="text-blue">Make A Schedule</h5>
                        <h2 className="mt-4">Make a schedule in advance<br />lable doctor</h2>
                        <p className="text-secondary mt-4">Healthcare is a very painful process, especially if you’re not taking care
                            of your health and having regular check-ups. HealhtyCarely makes it
                            easier for everyone to schedule a doctor’s appointment.
                        </p>
                        <div className="find-doctors-feature mt-4">
                            <Row xm={6}>
                                <Col sm="auto" className="tick-sign">
                                    <Image src={Tick}></Image>
                                </Col>
                                <Col>
                                    <p>Make a schedule online is easy</p>
                                </Col>
                            </Row>
                            <Row xm={6}>
                                <Col sm="auto" className="tick-sign">
                                    <Image src={Tick}></Image>
                                </Col>
                                <Col>
                                    <p>Easy to connect with doctor</p>
                                </Col>
                            </Row>
                        </div>
                        <Button className="see-the-doctors-btn mt-4">Make Schedule Now!</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default MakeASchedule;