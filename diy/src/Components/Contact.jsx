// src/Components/Contact.jsx
import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import conaa from '../assets/conaa.jpg'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className='con'>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <h4>(123)456-7890  </h4>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h4>craftsdiy@gmail.com</h4>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>123,Arivoli Nagar, Kovaipudur, Coimbatore</h4>
          </div>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
