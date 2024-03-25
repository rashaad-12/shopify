import React, { useState } from 'react';
import { LoginForm } from './LoginPage';
import { SignupForm } from './SignupPage';

import paneImage from './assests/images/dummy.jpg';
import dummy from './assests/images/background-image.jpg'

import '../../css/auth-page.css';
import { useNavigate } from 'react-router-dom';

export const AuthPage = () => {
    const [action, setAction] = useState('login');
    const navigate = useNavigate()

    const heading = action === 'signup' ? 'Sign Up' : 'Login';

    const handleCreateAccount = () => {
        navigate("/auth/register")
        setAction('signup');
    };

    const handleLogin = () => {
        navigate("/auth/login")
        setAction('login');
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 vw-100 position-relative ">
                <img
                    src={dummy}
                    className='position-absolute top-50 start-50 translate-middle h-100 w-100 object-fit-cover z-n1' />
                <div className="container h-75 w-75 auth-card position-relative p-5">
                        <div className='d-flex h-100 align-items-center justify-content-center'>
                            <div className="row h-100 w-100">
                            <div className="col-7   border-none rounded-5 position-relative overflow-hidden">
                                    <img
                                        src={paneImage}
                                        className='img-fluid position-absolute top-0 start-0 h-100 w-100 object-fit-cover' />
                                </div>
                                <div className="col-5 ps-4">
                                    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                                        <div className="card border-0 form-card w-100 bg-transparent">
                                            <div className="card-body text-center">
                                                {action === 'login' && <LoginForm heading={heading} onCreateAccount={handleCreateAccount} />}
                                                {action === 'signup' && <SignupForm heading={heading} onLogin={handleLogin} />}
                                            </div>
                                            <a href="/product" className='text-center mt-3 fs-5 input-info'>Return to your shopping experience</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};
