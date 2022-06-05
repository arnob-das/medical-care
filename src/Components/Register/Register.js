import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h1>Please register</h1>
            <form>
                <input type="email" name="" id="" />
                <input type="password" name="" id="" />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Registered</Link>
        </div>
    );
};

export default Register;