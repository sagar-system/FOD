import React from 'react';
import './about.css';
import aboutImage from './about.jpg'; // Properly imported image

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">CAR HUB</h2>
      <div className="about-content">
        <p>
          Welcome to Car Hub, your trusted online marketplace for buying and selling quality vehicles. 
          We connect buyers with verified sellers, offering a seamless experience with transparent pricing, 
          detailed listings, and secure transactions.
        </p>
        <p>
          Whether you're upgrading, downsizing, or finding your dream car, Car Hub ensures reliability, 
          convenience, and the best deals. With easy financing options and expert support, we make car 
          trading simple and stress-free.
        </p>
        <p className="highlight">Drive home your perfect car today! 🚗💨</p>
      </div>
      <div className="image-container">
        <img src={aboutImage} alt="Car Hub vehicles" className="about-image" />
      </div>
    </div>
  );
}