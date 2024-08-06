// src/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <img src="src/assets/CRAFT.jpg" alt="Crafting" className="about-image" />
        <div className="about-text">
          <h2>Our Passion for Crafts</h2>
          <p>
            Welcome to our world of crafts! We believe in the magic of handmade creations and the joy they bring. Our journey started with a love for all things crafty, from knitting and sewing to painting and sculpting.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and empower you to create beautiful crafts. We provide high-quality materials, comprehensive tutorials, and a supportive community to help you every step of the way.
          </p>
          <h2>Meet Our Team</h2>
          <p>
            Our team is made up of passionate crafters, artists, and creators who are dedicated to sharing their knowledge and skills. We are here to support your creative journey and help you bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;