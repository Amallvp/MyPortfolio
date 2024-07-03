import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_4t4geso','template_ahsk5nq',form.current, {
          publicKey: 'p1-UHjZSXgIbVZLhA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.alert('Enquiry Sent Sucessfully')
            window.location.reload()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }

    return (
        <div className="contact" id='contact'>
            <div className="contact-wrapper">
                <span className="contact-wrapper-subtitle">Get In Touch </span>
                <h3 className="contact-wrapper-title">Contact Me</h3>
            </div>

           <div className='contact-main'>
                <div className="contact-left">
                    <div className="contact-left-title">
                        <h3 className="contact-left-maintitle">Questions?</h3>
                        <span className="contact-left-subtitle">Connect with Me.... </span>
                    </div>
                    <span className="contact-left-details"><i class="fa-solid fa-map-location-dot"></i> Kannur,Kerala</span>
                    <span className="contact-left-details"><i class="fa-solid fa-phone-volume"></i> +91 7736369705</span>
                    <span className="contact-left-details"><i class="fa-solid fa-envelope-open-text"></i> amallvp06wd@gmail.com</span>
                </div>
    
                <div className="contact-right">
                    <form ref={form} className='contact-right-form ' onSubmit={sendEmail}>
    
                        <input type="text" className="form-input" placeholder='Name' name='username' required/>
                        <input type="number" className="form-input" placeholder='Contact number' name='usernumber' required/>
                        <input type="email" className="form-input" placeholder='Email' name='usermail' required/>
                        <textarea id="" className="form-input-textarea"  placeholder='Type your enquiry' name='message' required></textarea>
                        <button className="form-button" type='submit' value="Send">Submit</button>
                    </form>
                    
                    
    
                </div>
           </div>
        </div>
    )
}

export default Contact