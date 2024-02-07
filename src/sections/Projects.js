import React from 'react'
import '../styles/projects.css';
import GoogleScraper from './../assets/google-scraper.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h1 className='sf-font'>Projects</h1>
            <div className='card-carousel'>
                <div className='card-format'>
                    <div className='card-img'>
                        <img src={GoogleScraper} alt='templ' />
                    </div>
                    <div className='card-body'>
                        <h2>Google bar code automation</h2>
                        <p>A software to automatically query google and find out what item is associated with the barcode and store it in a database</p>
                        <p>Date: 01/01/19</p>
                        <p>Tech Stack<br /><span>Python</span><span>JavaScript</span></p>
                    </div>
                </div>
                <div className='card-format'></div>
                <div className='card-format'></div>
            </div>
        </section>
    )
}

export default Projects
