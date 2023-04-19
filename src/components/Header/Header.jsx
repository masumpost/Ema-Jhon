import React from 'react';
import'./Header.css'
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
            </div>
        </div>
    );
};

export default Header;