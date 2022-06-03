import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import './Feedback.css'

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    const feedbacksLen = (feedbacks.length)
    let [index, setIndex] = useState(0)
    // load fake data
    useEffect(() => {
        fetch('feedbacks.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    // handle button click
    const sliderRight = () => {
        if (index >= feedbacksLen - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }
    const sliderLeft = () => {
        if (index <= 0) {
            setIndex(0);
            sliderRight();
            return;
        }
        setIndex(index - 1);
    }
    console.log(index);
    // declare variable
    let name = feedbacks[index]?.name;
    let img = feedbacks[index]?.img;
    let profession = feedbacks[index]?.profession;
    let review = feedbacks[index]?.review;

    return (
        <section>
            <h3 className="text-center mt-5">Our patients feedback about us</h3>
            <p className="text-secondary text-center mb-5">their impression after using this application</p>
            <div id="reviews" className="reviews">
                <Container>
                    <Row md={6} className="feedback-container">
                        <Col>
                            <div style={{ height: '372px', width: '433px' }}>
                                <Image thumbnail="true" style={{ height: '372px', width: '433px' }} className="w-100" src={img}></Image>
                            </div>
                        </Col>
                        <Col>
                            <p className="mt-3 feedback-text">"{review}"</p>
                            <Row className="d-flex align-items-center feedback-btn-text">
                                <div style={{ marginLeft: '18px' }}>
                                    <p className="feedback-name">{name}</p>
                                    <p className="feedback-profession">{profession}</p>
                                </div>
                                <div className="feedback-btn-container">
                                    <button onClick={sliderLeft} className="left-right-btn">
                                        <FontAwesomeIcon className="icon" icon={faArrowLeftLong} />
                                    </button>
                                    <button onClick={sliderRight} className="left-right-btn">
                                        <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                                    </button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            </div >
        </section>
    );
};

export default Feedback;