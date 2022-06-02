import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {
    const { id, img, serviceName, shortDes } = props.service;
    const navigate = useNavigate()
    const serviceDetailsNavigate = () => {
        navigate(`/serviceDetails/${id}`)
    }
    return (
        <Col className="singleService">
            <Card className="service-card">
                <Card.Img variant="top" className="singleService-card-img ml-3 mt-5" src={img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '19px' }}>{serviceName}</Card.Title>
                    {/* <h6>{serviceName}</h6> */}
                    <Card.Text className="short-des">{shortDes}
                    </Card.Text>
                    <Button onClick={serviceDetailsNavigate} className="card-btn" variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleService;