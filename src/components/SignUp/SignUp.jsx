import React from 'react';
import'./SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
             <form className='form-container'>
                <h3 className='f-title'>Sign Up</h3>

                <label className='label-email' htmlFor="email">Email
                </label>
                <input className='input-box' type="email" name='email'/>
                <label className='label-email' htmlFor="password">Password
                </label>
                <input className='input-box' type="password" name='password' />
                <label className='label-email' htmlFor="conform">Conform Password
                </label>
                <input className='input-box' type="conform" name='conform' />
                <p><button className='login-btn'>Sign Up</button></p>
                <p className='link-p'><small>Already have an account? <Link className='link' to="/login">Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;