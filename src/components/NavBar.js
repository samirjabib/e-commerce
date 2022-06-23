import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'


const NavBar = () => {


    const navigate = useNavigate()

    const logout = () => {
        localStorage.setItem("token", "")
        navigate("/")
    }


    return (
        <nav className='navbar fixed'>
            <Link to="/">Home</Link>
            <Link to="/purshases">Purshases</Link>
            <Link to="/login">Login</Link>
            <Link to="/shop">Shop</Link>
            <button onClick={logout}>Logout</button>

        </nav>
    );
};

export default NavBar;