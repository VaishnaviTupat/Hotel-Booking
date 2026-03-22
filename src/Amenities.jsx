import React from "react";
import "./Amenities.css";

function Amenities() {
  return (
    <div className="amenities-page">
      <h2 className="amenities-title">Our Amenities</h2>

      <div className="amenities-container">
        <div className="amenity-card">
          🍽️<h3>Restaurant</h3>
          </div>
        <div className="amenity-card">
          💆‍♀️<h3>Spa & Wellness</h3>
          </div>
        <div className="amenity-card">
          🏊‍♂️<h3>Swimming Pool</h3>
          </div>
        <div className="amenity-card">
          📶<h3>Free Wi-Fi</h3>
          </div>
        <div className="amenity-card">
          🚗<h3>Free Parking</h3>
          </div>
        <div className="amenity-card">
          🏋️<h3>Fitness Center</h3>
          </div>
        <div className="amenity-card">
          🛎️<h3>24/7 Room Service</h3>
          </div>
        <div className="amenity-card">
          🧹<h3>Daily Housekeeping</h3>
          </div>
      </div>
    </div>
  );
}

export default Amenities;