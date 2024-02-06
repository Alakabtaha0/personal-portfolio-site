import React from 'react'
import '../styles/home.css';

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
                <div className='bg-black bg-default'></div>
                <div className='bg-black bg-default'></div>
                <div className='bg-black bg-default'></div>
                <div className='bg-black bg-default'></div>
                <div className='bg-black bg-default'></div>
                <div className='bg-black bg-default'></div>
                <div className="black-bar bg-default">
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home
