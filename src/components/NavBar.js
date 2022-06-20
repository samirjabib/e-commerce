import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const NavBar = () => {
    return (
        <nav className='navbar fixed'>
            <Link to="/">Shop</Link>
            <Link to="/purshases">Purshases</Link>
            <Link to="/login">Login</Link>

        </nav>
    );
};

export default NavBar;