import React, { useState } from 'react';
import "../styles/Contact.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit form data goes here
    setFormSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      {formSubmitted ? (
        <p>Thank you for your message! We will get back to you as soon as possible.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={message} onChange={handleMessageChange} required></textarea>
          <button type="submit">Send</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
