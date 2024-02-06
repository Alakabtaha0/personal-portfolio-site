import React from 'react'
import '../styles/about.css';


const About = () => {
    return (
        <section id='about'>
            <h1 className='sf-font'>About Me</h1>
            <div className='info-layout'>
                
                <div className='skills-sect'>
                    <h3>Skills</h3>
                    <ul>
                        <li><span>Front End  </span>HTML, CSS, Javascript, React, React Native</li>
                        <li><span>Back End  </span>Node.js, Express, MongoDB</li>
                        <li><span>Other Skills  </span>Python, Automation</li>
                        <li><span>Languages  </span>English, Arabic</li>
                    </ul>
                </div>
                <div className='personal-info'>
                    <h3>Info</h3>
                    <ul>
                        <li><span>Name  </span>Taha Al-Asadi</li>
                        <li><span>Age  </span>25</li>
                        <li><span>Location  </span>London</li>
                        <li><span>Occupation  </span>Software Engineer</li>
                        <li><span>Role  </span>Full Stack Web Developer</li>
                        <li><span>Side Hustle  </span>Businessman</li>
                        <li><span>Currently Learning  </span>AI, SQL</li>
                        <li><span>Likes  </span>Reading, Movies, Games, History</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default About
