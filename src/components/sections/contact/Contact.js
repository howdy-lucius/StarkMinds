import React, { useState } from 'react';
import PaperPlane from './PaperPlane';

function Contact() {
    const [body, setBody] = useState('');

    return(
        <footer className="section-contact">
            <h2>...Ready to Get in Touch</h2>
            <div className="email-form">
                <div className="email-header">Email</div>
                <textarea id="email-form" onChange={e => setBody(e.target.value)} value={body}></textarea>
                <PaperPlane body={body} />
            </div>
            <h2>Yeah, You're Ready :)</h2>
        </footer>
    )
}

export default Contact;