import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleRatingCard from '../SingleRatingCard/SingleRatingCard';
import './OurRatings..css'

const OurRatings = () => {
    const [ratings, setRatings] = useState([]);
    useEffect(() => {
        fetch('ratings.json')
            .then(res => res.json())
            .then(data => setRatings(data))
    }, [])
    return (
        <section className="ourRatings">
            <Container>
                <h5 className="text-blue text-center pt-3">Our Rating</h5>
                <h2 className="text-center pt-3">We’re employee benefit at<br />7500+ hospital </h2>
                <Row
                    sm={12}
                    md={6}
                    lg={4}
                    className="d-flex justify-content-center text-center mt-3"
                >
                    {ratings.map(rating => <SingleRatingCard key={rating.number} rating={rating} />)}
                </Row>
            </Container>
        </section>
    );
};

export default OurRatings;