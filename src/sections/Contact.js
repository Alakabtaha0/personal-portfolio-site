import React, { useState } from 'react'
import '../styles/contact.css'
import axios from 'axios';

const Contact = () => {
    const [sending, setSending] = useState(false)
    let data;

    const handleSubmit = async () => {
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
        try {
            const response = await axios.post('http://16.171.27.220:3000/api/v1/mail', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                alert('Message Sent');
                setSending(false);
            } else if (response.status === 500 || response.status === 400) {
                alert("Something went wrong, we couldn't send your message. Please try again later.");
                setSending(false);
            }
        } catch (error) {
            console.error(error);
            setSending(false);
        }

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
