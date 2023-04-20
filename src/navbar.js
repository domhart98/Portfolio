import React from 'react'
import './navbar.css'
import heart from "./images/heart-icon.svg"

const Navbar = () => {
    return(
        <nav id="navbar">
            <div className="" id="nav-brand">
                <div id="brand-text">
                    <p>DH</p>
                </div>   
                <div id="brand-image">
                    <img src={heart} alt=""/>
                </div>       
            </div>
            <ul id="nav-menu">
                <li className="nav-item"><a href="#personal-section">PERSONAL</a>
                </li>
                <li className="nav-item"><a href="#project-section">PROJECTS</a>
                </li>
                <li className="nav-item"><a href="#contact-section">CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;