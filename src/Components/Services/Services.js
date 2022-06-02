import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section id="services" className="mt=4">
            <div className="services-des text-center pt-4">
                <h5 className="text-blue">Fast Solutions</h5>
                <h2>step by step to get your solutions</h2>
            </div>
            <Container className="mt-5"
>
                <Row
                    xm={12}
                    md={6}
                    lg={4}
                >
                    {services.map(service => <SingleService key={service.id} service={service} />)}
                </Row>
            </Container>
        </section>
    );
};

export default Services;