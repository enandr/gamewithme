import React from 'react';
import {NavLink} from "react-router-dom";
import './navbar.css';

const NavBar = (props) => {
    return (
        <div className={'navbar'}>
            <ul>
                <NavLink to={'/'}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/about'}>
                    <li>About</li>
                </NavLink>
                <NavLink to={'/waitlist'}>
                    <li>Join A Waitlist</li>
                </NavLink>
                <NavLink to={'/admin'}>
                    <li className={'create-room'}>Create A Room</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default NavBar;
