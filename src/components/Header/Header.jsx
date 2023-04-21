import React, { useContext } from 'react';
import'./Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
   

    const handelLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(error=>{});
    }

    return (
        <div className='header'>
        <div style={{alignItems:"center", display:"flex"}}>
            <img src={logo} alt="" /><small style={{color:"white" }}>pro</small>
            </div>
            <div className='nav'>
                <Link to ="/">Shop</Link>
                <Link to ="/order">Order</Link>
                <Link to ="/inventory">Inventory</Link>
                <Link to ="/login">Login</Link>
                <Link to ="/signup">Sign Up</Link>
                {
                    user&&<span className='text-white'>{user.email} <button onClick={handelLogOut}>Log Out</button></span>
                }
            </div>
        </div>
    );
};

export default Header;