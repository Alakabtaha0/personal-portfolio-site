import React, { useState } from 'react'
import '../styles/navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    });

    return (
        <div className={`nav-bg ${navbar && 'show'}`}>
            <div className='nav-container'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar
