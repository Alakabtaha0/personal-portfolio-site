import React from 'react'
import '../styles/projects.css';
import GoogleScraper from './../assets/google-scraper.png';
import Cards from '../components/Cards';

const Projects = () => {

    const projectData = [
        {
            link: 'https://www.google.com',
            imageSrc: GoogleScraper,
            title: 'Barcode Scraper',
            description: 'A web scraper that uses puppeteer to scrape google search results for barcode numbers',
            dateCompleted: '06/02/24',
            techStack: ['Python', 'Node.js', 'React', 'MongoDB', 'Express.js']
        },
        {
            link: 'https://www.google.com',
            imageSrc: GoogleScraper,
            title: 'Barcode Google',
            description: 'A web scraper that uses puppeteer to scrape google search results for barcode numbers',
            dateCompleted: '06/02/24',
            techStack: ['Python']
        },
        {
            link: 'https://www.google.com',
            imageSrc: GoogleScraper,
            title: 'Google Scraper',
            description: 'A web scraper that uses puppeteer to scrape google search results for barcode numbers',
            dateCompleted: '06/02/24',
            techStack: ['Python', 'Puppeteer']
        }
    ]

    return (
        <section id='projects'>
            <h1 className='sf-font'>Projects</h1>
            <div className='card-carousel'>
                {
                    projectData.map((project, index) => {
                        return (
                            <Cards 
                                key={index}
                                link={project.link}
                                imageSrc={project.imageSrc}
                                title={project.title}
                                description={project.description}
                                dateCompleted={project.dateCompleted}
                                techStack={project.techStack}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects
