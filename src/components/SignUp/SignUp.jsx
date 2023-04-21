import React, { useContext, useState } from 'react';
import'./SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

        const handelSignUp = (event) =>{
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            const confirm = form.confirm.value;
            // console.log(email, password, confirm); 
            
            setError('')
            if(password !== confirm){
                setError('Password did not match');
                return;
            }
            else if(password < 6){
                setError('password must be 6 carracter');
                return;
            }
            createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error=>{
                console.log(error)
                setError(error.message)
            })
    
        }

       
    return (
        <div>
             <form className='form-container' onSubmit={handelSignUp}>
                <h3 className='f-title'>Sign Up</h3>

                <label className='label-email' htmlFor="email">Email
                </label>
                <input className='input-box' type="email" name='email' required/>
                <label className='label-email' htmlFor="password">Password
                </label>
                <input className='input-box' type="password" name='password' required/>
                <label className='label-email' htmlFor="conform">Conform Password
                </label>
                <input className='input-box' type="password" name='confirm' required/>
                <input type="submit" placeholder='Submit' className='login-btn' />
                <p className='link-p'><small>Already have an account? <Link className='link' to="/login">Login</Link></small></p>

                <p className='dot'>-------------------or--------------------</p>

                <p><button className='login-btn'> <img className='img' src="google.jpg" alt="" /> <span>  Continue with google</span></button></p>

                <p className='error'>{error}</p>
            </form>
        </div>
    );
};

export default SignUp;