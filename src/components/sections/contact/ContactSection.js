import React from 'react';
import ContactForm from './ContactForm';

function ContactSection() {
    return(
        <footer>
            <div className="contact-section">
                <ContactForm />
            </div>
            <div className="email-link-container">
                <a href="mailto:hello@starkminds.com">hello@starkminds.com</a>
            </div>
        </footer>
    )
}

export default ContactSection;