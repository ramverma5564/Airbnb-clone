import React from "react";
import arcImage from './arc.jpeg';


export default function Header() {
    return (
        <header>
        <nav className='nav'>
            <img src={arcImage} alt="logo" className='nav-logo'/>
            <ul className='nav-items'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        </header>
    );
};
  