import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../NavBar/NavBar';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setError, handleRegisterWithEmailPassword, setUser,auth } = useAuth();

    // declare state
    let [fullName, setFullName] = useState("");
    let [photoUrl, setPhotoUrl] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    const location = useLocation();
    let navigate = useNavigate()
    const redirect_uri = location.state?.from?.pathname || "/";


    const handleFullName = (e) => {
        setFullName(e.target.value);
    }
    const handlePhotoUrl = (e) => {
        setPhotoUrl(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistrationWithEmailPass = (e) => {
        e.preventDefault();
        handleRegisterWithEmailPassword(auth,email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    // handle google sign in
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
            <Container className="pt-5">

                {/* for registration */}
                <Form className="registration-form m-auto">
                    <h3>Create An Account</h3>
                    <Form.Group onBlur={handleFullName} className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group onBlur={handlePhotoUrl} className="mb-3">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="email" placeholder="Enter Photo Url" />
                    </Form.Group>

                    <Form.Group onBlur={handleEmail} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group onBlur={handlePassword} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>

                    <Button onClick={handleRegistrationWithEmailPass} variant="primary" type="submit" className="w-100">
                        Create An Account
                    </Button>
                </Form>
                <Form.Group className="d-flex justify-content-center mt-3">
                    <p>Already Have An Account? <span className="text-blue text-underline">Login</span></p>
                </Form.Group>
                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
                <Link to="/register">New User ?</Link>
            </Container>
        </div>
    );
};

export default Login;