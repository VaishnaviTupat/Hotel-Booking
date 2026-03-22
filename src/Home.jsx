import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Royal Swastik</h1>
          <p>Experience Luxury, Comfort & Elegance</p>
          <NavLink to="/booking" className="hero-btn">Book Now</NavLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="feature-card">
          <h3>Luxury Rooms</h3>
          <p>Spacious and elegantly designed rooms for your comfort.</p>
        </div>

        <div className="feature-card">
          <h3>Exclusive Offers</h3>
          <p>Special discounts and packages for every guest.</p>
        </div>

        <div className="feature-card">
          <h3>24/7 customer Support</h3>
          <p>Our team is available anytime to make your stay perfect.</p>
        </div>

      <div className="feature-card">
          <h3>Hygiencic & Safe stay </h3>
          <p>Experience a stay where Hygiene meets comfort.</p>
        </div>

        <div className="feature-card">
          <h3>Prime Location</h3>
          <p>we have Prime location so can stay the location you want as per your preffernce.</p>
        </div>
      
</div>

      {/* Booking CTA Section */}
      <div className="booking-cta">
        <h2>Ready for a memorable stay?</h2>
        <NavLink to="/booking" className="hero-btn">Book Your Room</NavLink>
      </div>

    </div>
  );
}

export default Home;
