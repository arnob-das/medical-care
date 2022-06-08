import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import './Register.css'

const Register = () => {

    return (
        <Container>
            <NavBar />
            <form>
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login">Already Registered</Link>
        </Container>
    );
};

export default Register;