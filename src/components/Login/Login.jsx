import React from 'react';
import'./Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className='form-container'>
                <h3 className='f-title'>Login</h3>
                <label className='label-email' htmlFor="email">Email
                </label>
                <input className='input-box' type="email" name='email'/>
                <label className='label-email' htmlFor="password">Password
                </label>
                <input className='input-box' type="password" name='password' />
                <p><button className='login-btn'>Login</button></p>
                <p><small>New to Ema-jhon? <Link className='link' to="/signup">Create New account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;