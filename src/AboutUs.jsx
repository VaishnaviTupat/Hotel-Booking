import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Royal Swastik</h1>
          <p>Luxury stays. Comfortable experience. Unforgettable memories ✨</p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-content">

        <div className="about-image">
          <img src="/image/bi2.jpg" alt="hotel" />
        </div>

        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Royal Swastik is your trusted hotel booking platform where comfort
            meets luxury. We provide a seamless booking experience with a wide
            range of rooms across top destinations.
          </p>

          <p>
            Whether you're traveling for business or leisure, we ensure a
            premium stay with affordable pricing and world-class service.
          </p>

          <button className="about-btn">Explore Rooms</button>
        </div>

      </section>

      {/* FEATURES */}
      <section className="about-features">

        <h2>Why Choose Us?</h2>

        <div className="feature-grid">

          <div className="feature-box glass">
            <span>🏨</span>
            <h3>Luxury Rooms</h3>
            <p>Modern, elegant, and comfortable stays.</p>
          </div>

          <div className="feature-box glass">
            <span>💰</span>
            <h3>Best Deals</h3>
            <p>Affordable prices with top quality service.</p>
          </div>

          <div className="feature-box glass">
            <span>📍</span>
            <h3>Prime Locations</h3>
            <p>Stay in the heart of every city.</p>
          </div>

          <div className="feature-box glass">
            <span>🕒</span>
            <h3>24/7 Support</h3>
            <p>Always here to help you anytime.</p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="about-stats">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Hotels</p>
        </div>

        <div className="stat-card">
          <h2>1000+</h2>
          <p>Bookings</p>
        </div>

      </section>

    </div>
  );
}

export default AboutUs;