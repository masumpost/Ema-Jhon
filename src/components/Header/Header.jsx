import React from 'react';
import'./Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='nav'>
                <a href="/order">Order</a>
                <a href="/product">Product Review</a>
                <a href="/manage">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;