import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import PaperPlane from './PaperPlane';
import { PuzzleContext } from '../../../contexts/PuzzleContext';

const ContactForm = () => {
  const form = useRef();
  const { completedPuzzle } = useContext(PuzzleContext);
  const sendEmail = (e) => {
    e.preventDefault();
    const puzzleText = completedPuzzle ? 'YES' : 'NO';

    // format the message
    // message is formatted to preserve spacing for email
    const email = {
      email: form.current.email.value,
      message: form.current.message.value.split('\n').join('<br>').split(' ').join('&nbsp;'),
      completed_puzzle: puzzleText
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      email,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log('email sent, Thanks!');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="email-form">
            <input className="email-header" type="email" name="email" placeholder="EMAIL ADDRESS:"></input>
            <textarea id="email-form" name="message" placeholder={"your message: Type whatever you want, ask a question, tell a story, present an idea, or just press random keys until you feel satisfied?"}></textarea>
            <PaperPlane/>
        </div>
    </form>
  );
};

export default ContactForm;