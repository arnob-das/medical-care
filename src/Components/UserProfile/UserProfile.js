import React from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Button from 'react-bootstrap/Button';

import './UserProfile.css'

const UserProfile = () => {
    const { user } = useAuth();

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user?.imageURL} />
                <Card.Body>
                    <Card.Title>{user?.displayName}</Card.Title>
                    <Card.Text>{user?.email}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default UserProfile;