import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: "red",
        fontWeight: 'bold',

    };

    return (
        <nav>
            {/* The Slash can be omitted . This one is Standard. */}
            <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : undefined}> Home </NavLink>

            {/* SLASH is a MUST. A forward slash is added after 'about', because another 'about' is here to create a full link of culture. So, it will not Catch/Mark both while selecting the 'Culture' nav! so, '/' is working kinda "exact" keyword of V5 React-Routing.*/}
            <NavLink to="about/" style={({ isActive }) => isActive ? activeStyle : undefined}> ABOUT </NavLink>

            {/* If address link is defined with a single word & there is no extra word is added before, then SLASH can be OMITTED from both side! */}
            <NavLink to="friends" style={({ isActive }) => isActive ? activeStyle : undefined}> Friends </NavLink>
            
            {/* Slash can be Added on the BOTH end. Not Standard!  */}
            <NavLink to='/about/culture/' style={({ isActive }) => isActive ? activeStyle : undefined}> Culture </NavLink>

            
            <NavLink to='/about/culture/dynamic' style={({ isActive }) => isActive ? activeStyle : undefined}> DynamicFriends </NavLink>
        </nav>
    );
};

export default Navigation;