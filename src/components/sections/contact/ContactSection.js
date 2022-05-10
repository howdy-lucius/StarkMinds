import React, { useState } from 'react';
import PaperPlane from './PaperPlane';
import Winky from './Winky';

function ContactSection() {
    const [body, setBody] = useState('');

    return(
        <footer className="contact-section">
            <h2>...Ready to Get in Touch?</h2>
            <div className="email-form">
                <div className="email-header">YOUR MESSAGE:</div>
                <textarea id="email-form" onChange={e => setBody(e.target.value)} value={body} placeholder={"your message: Type whatever you want, ask a question, tell a story, present an idea, or just press random keys until you feel satisfied?"}></textarea>
                <PaperPlane body={body} />
            </div>
            <Winky />
        </footer>
    )
}

export default ContactSection;