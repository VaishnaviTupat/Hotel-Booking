import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay">
          <h1>Welcome to Royal Swastik</h1>
          <p>Experience Luxury, Comfort & Elegance</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content">
        <h2>Our Story</h2>
        <p>
          Royal Swastik was created with a passion for hospitality and excellence.
          We provide a perfect blend of luxury, comfort, and world-class service.
          Our goal is to make every guest feel special and at home.
        </p>
      </div>

      {/* Stats Section */}
      <div className="about-stats">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-card">
          <h3>5000+</h3>
          <p>Happy Guests</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Luxury Rooms</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-section">
        <h2>Why Choose Us?</h2>

        <div className="why-cards">
          <div className="why-card">
            <h3>Luxury Rooms</h3>
            <p>Modern interiors with premium comfort and style.</p>
          </div>

          <div className="why-card">
            <h3>Prime Location</h3>
            <p>Located in the heart of the city for easy access.</p>
          </div>

          <div className="why-card">
            <h3>Affordable Prices</h3>
            <p>Best quality stay at competitive pricing.</p>
          </div>

          <div className="why-card">
            <h3>Excellent Service</h3>
            <p>Friendly staff dedicated to your comfort.</p>
          </div>

           <div className="why-card">
          <h3>Hygiencic & Safe stay </h3>
          <p>Experience a stay where Hygiene meets comfort.</p>
        </div>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;

