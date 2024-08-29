import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <form action="YOUR_FORM_HANDLER" method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <h3>Contact Details</h3>
          <div className="detail">
            <FaPhoneAlt className="detail-icon" />
            <span>+639465743317</span>
          </div>
          <div className="detail">
            <FaEnvelope className="detail-icon" />
            <span>bolanioerica@gmail.com</span>
          </div>
          <div className="detail">
            <FaMapMarkerAlt className="detail-icon" />
            <span>Davao City</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
