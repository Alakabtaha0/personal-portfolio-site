import React from 'react'
import '../styles/home.css';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Download from '../assets/download.svg';

const Home = () => {
    return (
        <section id='home'>
            <div className='bg-decor'>
                <div className='bg-sun'>
                    <div className='scrolling-text-1'>
                        Hi My Name's Taha - I'm a full stack software engineer - Scroll down to learn more about me -
                    </div>
                    <div className='scrolling-text-2'>
                        Last updated on 06/02/24 - Created using react - Website v2.0.1 - Always updating.....
                    </div>
                </div>
                <div className='bg-black center-origin bg-default'></div>
                <div className='bg-black center-origin bg-default'></div>
                <div className='bg-black center-origin bg-default'></div>
                <div className='bg-black center-origin bg-default'></div>
                <div className='bg-black center-origin bg-default'></div>
                <div className='bg-black center-origin bg-default'></div>
                <div className="black-bar center-origin bg-default">
                    <ul>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='social-container co-2'>
                <div className='neon-line'></div>
                <a href='https://github.com/Alakabtaha0' target='_blank' rel='noreferrer'>
                    <img className='svg-icon-neon' src={Github} alt='github-link' />
                </a>
                <a href='https://www.linkedin.com/in/taha-al-asadi-98326a261' target='_blank' rel='noreferrer'>
                    <img className='svg-icon-neon' src={LinkedIn} alt='linkedin-link' />
                </a>
                <div className='neon-line'></div>
            </div>
            <a href='/downloads/Taha Al-Asadi Resume.pdf' download>
                <div className='download-button neon-border'>
                    <img src={Download} alt='download-link' />
                    <p>DOWNLAOD MY CV</p>
                </div>
            </a>
        </section>
    )
}

export default Home
