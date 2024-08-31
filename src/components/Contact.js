import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [buttonClass, setButtonClass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!name || !message) {
            alert('Name and Message are required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const data = {
            Name: name,
            Email: email,
            Message: message,
        };

        try {
            console.log('Sending data:', data); // Debugging line
            const response = await fetch('https://script.google.com/macros/s/AKfycbxyvwCwjwfWDHoG_CGAcYn-aompPTjOF_DGJjjBlV7mWjLyV_M6B1o0engwvmpKtMzz/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors'
            });

            if (response.ok) {
                alert('Your message was sent successfully!');
                
                // Trigger button animation
                setButtonClass('button-sent');

                // Clear the form after successful submission
                setName('');
                setEmail('');
                setMessage('');

                // Reset the button animation after a short delay
                setTimeout(() => setButtonClass(''), 1500);
            } else {
                alert('There was an issue sending your message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error); // Debugging line
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <section id='Contact'>
            <h2>Contact</h2>
            <p>Get in Touch</p>

            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        id='name' 
                        placeholder='Enter Your Name: ' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                    <input 
                        id='email' 
                        placeholder='Enter Your Email: ' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <textarea 
                        id='message' 
                        placeholder='Enter Your Message: ' 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                    />
                    <button type='submit' className={buttonClass}>Send</button>
                </form>
            </div>
            
            <p>Connect with me on Social Media</p>
            <footer>
                <a href='https://drive.google.com/file/d/1pvrFZ6e-D0JaAvCeMvdnZZmluqJ4n1u9/view'><img src={require('./images/socials/resume.png')} alt='Resume' /></a>
                <a href='https://www.linkedin.com/in/harsh-verma-782a16231/'><img src={require('./images/socials/linkedIn.png')} alt='LinkedIn' /></a>
                <a href='https://github.com/harshverma2609?tab=repositories'><img src={require('./images/socials/github.png')} alt='GitHub' /></a>
                <a href='https://www.instagram.com/'><img src={require('./images/socials/instagram.png')} alt='Instagram' /></a>
                <a href='mailto:harshverma_17@outlook.com'><img src={require('./images/socials/mail.png')} alt='Mail' /></a>
            </footer>
        </section>
    );
};

export default Contact;
