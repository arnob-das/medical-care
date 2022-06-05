import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../NavBar/NavBar';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setError } = useAuth();

    const location = useLocation();
    let navigate = useNavigate()
    const redirect_uri = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                navigate(redirect_uri);
            })
            .catch(err => { setError(err.message); })
    }
    return (
        <div>
            <NavBar />
            <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            <Link to="/register">New User ?</Link>
        </div>
    );
};

export default Login;