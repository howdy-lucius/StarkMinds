import PaperPlane from './PaperPlane';

function Contact() {
    return(
        <footer className="section-contact">
            <h2>...Ready to Get in Touch</h2>
            <div className="email-form">
                <div className="email-header">Email</div>
                <textarea id="email-form"></textarea>
                <PaperPlane />
            </div>
            <h2>Yeah, You're Ready :)</h2>
        </footer>
    )
}

export default Contact;