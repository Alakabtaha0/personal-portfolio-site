import React, { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
    const [sending, setSending] = useState(false)
    let data = {}

    const handleSubmit = () => {
        setSending(send => !send);
        let name = document.querySelector('#name').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
            setSending(false);
            return;
        }
        data = {
            name,
            email,
            message
        };
        setTimeout(() => {
            setSending(send => !send);
        }, 3000);
        
    }

    return (
        <section id='contact'>
            <h1 className='sf-font'>Contact Me</h1>
            {sending && <div className='active'>
                <div className='sending-animation'><p>Sending...</p></div>
            </div>}
            <div className='contact-form'>
                <input id='name' className='input-retro' placeholder='Your Name...' />
                <input id='email' className='input-retro' placeholder='Your Email...' />
                <textarea id='message' className='textarea-retro' placeholder='Message...' />
                <button onClick={handleSubmit} className='btn-retro'>Send</button>
            </div>
        </section>
    )
}

export default Contact;
