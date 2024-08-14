
import './Contact.css';

const Contact =()=>{
    return(
        <section id='Contact'>
            <h2>Contact</h2>
            <p>Get in Touch</p>

            <div className='form-container'>
                <form>
                    <input id='name' placeholder='Enter Your Name: ' />
                    <input id='email' placeholder='Enter Your Email: ' />
                    <textarea id='message' placeholder='Enter Your Message: ' />
                    <button>Send</button>
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
}

export default Contact;
