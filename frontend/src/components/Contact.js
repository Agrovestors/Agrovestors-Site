// src/components/Contact.js
import React from 'react';
import './Contact.css'; /* Importing the CSS file to style the page*/

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Us Heading */}
      <h2 className="contact-heading">Contact Us</h2>
      
      {/* Introductory Writeup */}
      <p className="contact-text">
        If you have any questions or need more information, feel free to reach out to us. We'd love to hear from you!
      </p>
      
      {/* Contact Form */}
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
          required
        ></textarea>
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      
      {/* Office Location and Contact Info */}
      <div className="contact-info">
        <p className="contact-description">
          <strong>We are Here for You!</strong><br />
          At Agrovestors Farm-Tech, we are committed to helping you find the best solutions for your agricultural needs.
          Whether you have inquiries about our services or need further information, don’t hesitate to reach out.
          We value your feedback and look forward to connecting with you.
        </p>
        
        {/* Office Address */}
        <div className="contact-details">
          <h4>Our Office Location:</h4>
          <p>Agrovestors Farm-Tech Headquarters</p>
          <p>1234 Agro Street, Farmville, Abuja, Nigeria.</p>
          
          {/* Email and Phone */}
          <h4>Contact Information:</h4>
          <p>Email: <a href="mailto:info@agrovestors.com">info@agrovestors.com</a></p>
          <p>Phone: +234 123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
