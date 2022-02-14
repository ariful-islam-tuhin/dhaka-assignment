import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    var activeStyle = {
        fontWeight: "bold",        
        color: "white", 
        backgroundColor:"#01896A"

    };

   
    return (
        <nav className='mt-3 flex'>
            <NavLink className="NavLink" to="/allofyou" activeStyle={activeStyle}>
                All of you
            </NavLink>
            <NavLink className="NavLink" to="/recomanded" activeStyle={activeStyle}>
               Recomanded
            </NavLink>
            <NavLink className="NavLink" to="/topmanufacture" activeStyle={activeStyle}>
                Top ManuFactures
            </NavLink>
            <NavLink className="NavLink" to="/winterspecial" activeStyle={activeStyle}>
               Winter Special
            </NavLink>
            <NavLink className="NavLink" to="/deminspecial" activeStyle={activeStyle}>
                Demin Special
            </NavLink>
            <NavLink className="NavLink" to="/womenswear" activeStyle={activeStyle}>
                Women's wear
            </NavLink>
            <NavLink className="NavLink" to="/kidswear" activeStyle={activeStyle}>
                Kid's wear
            </NavLink>
            <NavLink className="NavLink" to="/tshirts" activeStyle={activeStyle}>
                T-shirts
            </NavLink>
            <NavLink className="NavLink" to="/mensfashion" activeStyle={activeStyle}>
                Men's Fashion
            </NavLink>
            <NavLink className="NavLink" to="/mensfashio" activeStyle={activeStyle}>
                Men's Fash
            </NavLink>
            <NavLink className="NavLink" to="/mensfashi" activeStyle={activeStyle}>
                Men's Fas
            </NavLink>


        </nav>
    );
};

export default Navbar;