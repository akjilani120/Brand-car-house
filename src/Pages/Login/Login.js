import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const handleNavigate =() =>{
        navigate("/signup")
    }
    return (
        <div>
            <h1> I am login page</h1>
            <p>If have not account ? <span onClick={handleNavigate} >Sign Up</span> </p>
        </div>
    );
};

export default Login;