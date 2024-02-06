import React from 'react'
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <div className='nav-bg'>
            <div className='nav-container'>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar
