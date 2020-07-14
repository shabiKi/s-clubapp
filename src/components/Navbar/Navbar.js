import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Logo from '../../assets/logo/logo.svg'
import './Navbar.css';

const navbar = (props) => { 
    return (
        <header className="navbar">
            <nav className="navbar_navigation">
                <div className="navbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="navbar_logo"><Link to="/"><img src={Logo} alt="logo"></img></Link></div>
                <div className="spacer-b" />
                <div className="navbar_navigation-items">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/club">Club</NavLink></li>
                        <li><NavLink to="/fixture">Fixture</NavLink></li>
                        <li><NavLink to="/players">Players</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar_navigation-items">
                    <ul className="login-btn">
                        <li><NavLink to="/Login">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default navbar;