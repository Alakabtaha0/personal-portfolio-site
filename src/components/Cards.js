import React from 'react'
import '../styles/cards.css';

const Cards = ({ link, imageSrc, title, description, dateCompleted, techStack }) => {
    return (
        <a className='box-link' href={link} target='_blank' rel='noreferrer'>
            <div className='card-format'>
                <div className='card-img'>
                    <img src={imageSrc} alt='templ' />
                </div>
                <div className='card-body'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Date {dateCompleted}</p>
                    <p>Tech Stack</p>
                        <div className='tech-stack-format'>
                            {
                                techStack.map((tech, index) => {
                                    return (
                                        <div key={index} className='tech-stack-child'><p>{tech}</p></div>
                                    )
                                })
                            }
                        </div>
                        {/* {
                        techStack.map((tech, index) => {
                            return (
                                <span key={index}>{tech}</span>
                            )
                        }) */}
                   
                </div>
            </div>
        </a>
    )
}

export default Cards
