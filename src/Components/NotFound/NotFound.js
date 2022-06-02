import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/");
    }

    return (
        <div className="text-center not-found">
            <h1 className="text-blue not-found-title">404</h1>
            <h1 className="page-not-found">oops! Page not found</h1>
            <h3 className="mt-3">Oops! The page you are looking for does not exist. It might have been moved or deleted.</h3>
            <Button className="mt-3 home-btn" onClick={handleNavigation}>Home</Button>
        </div>
    );
};

export default NotFound;