import React, { useContext, useState } from 'react';
import'./Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname|| '/';

    const handelLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace:true})
        })
        .catch(error =>{
            console.error(error);
        })
    }


    return (

        <div>
            <form onSubmit={handelLogin} className='form-container'>
                <h3 className='f-title'>Login</h3>
                <label className='label-email' htmlFor="email">Email
                </label>
                <input className='input-box' type="email" name='email' required/>
                <label className='label-email' htmlFor="password">Password
                </label>
                <input className='input-box' type={show? 'text' : "password"} name='password' required/>
                <p onClick={()=> setShow(!show)}><small>
                    {
                        show? <span>Hide pass</span>: <span>Show pass</span>
                    }
                    </small></p>
                <input type="submit"  placeholder='Login' className='login-btn' />
                <p><small>New to Ema-jhon? <Link className='link' to="/signup">Create New account</Link></small></p>

                <p className='dot'>-------------------or--------------------</p>

                <p><button className='login-btn'> <img className='img' src="google.jpg" alt="" /> <span>Continue with google</span></button></p>
            </form>
        </div>
    );
};

export default Login;