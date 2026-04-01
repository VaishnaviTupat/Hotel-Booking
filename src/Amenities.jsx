import React from "react";
import "./Amenities.css";

function Amenities() {

  const amenities = [
    { name: "Restaurant", icon: "🍽️", img: "/image/rest.jpg" },
    { name: "Spa & Wellness", icon: "💆‍♀️", img: "/image/spa.jpg" },
    { name: "Swimming Pool", icon: "🏊‍♂️", img: "/image/swim.jpg" },
    { name: "Free Wi-Fi", icon: "📶", img: "/image/wifi.jpg" },
    { name: "Free Parking", icon: "🚗", img: "/image/park.jpg" },
    { name: "Fitness Center", icon: "🏋️", img: "/image/gym.jpg" },
    { name: "Room Service", icon: "🛎️", img: "/image/serv.jpg" },
    { name: "Housekeeping", icon: "🧹", img: "/image/clean.jpg" }
  ];

  return (
    <div className="amenities-page">

      <h2 className="amenities-title">✨ Our Amenities</h2>
      <p className="amenities-subtitle">
        Enjoy world-class facilities during your stay
      </p>

      <div className="amenities-container">
        {amenities.map((item, index) => (
          <div className="amenity-card" key={index}>

            {/* IMAGE */}
            <img src={item.img} alt={item.name} />

            {/* OVERLAY CONTENT */}
            <div className="amenity-overlay">
              <span>{item.icon}</span>
              <h3>{item.name}</h3>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Amenities;