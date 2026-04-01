import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const roomRef = useRef();

  // 🌈 Mood State
  const [mood, setMood] = useState("all");

  const hotels = [
    { name: "Hyderabad", price: "₹3500", img: "/image/Hotel6.jpg"},
    { name: "Mumbai", price: "₹3200", img: "/image/Hotel5.jpg" },
    { name: "Chennai", price: "₹3000", img: "/image/hotel3.jpg"},
    { name: "Surat", price: "₹3200", img: "/image/Hotel4.jpg"}
  ];

  // 🏨 Rooms with Mood Tag
  const rooms = [
    { id: 1, name: "Single Bed Non-AC Room", price: 1200, img: "image/singlebed.jpg", mood: "work" },
    { id: 2, name: "Single Bed AC Room", price: 2000, img: "image/singleAc.jpg", mood: "work" },
    { id: 3, name: "Double Bed Non-AC Room", price: 2200, img: "image/doublebed.jpg", mood: "family" },
    { id: 4, name: "Double Bed AC Room", price: 3000, img: "image/doubleac.jpg", mood: "family" },
    { id: 5, name: "Deluxe Room", price: 3500, img: "image/deluxe.jpg", mood: "relax" },
    { id: 6, name: "Family Room", price: 5000, img: "image/family.jpg", mood: "family" },
    { id: 7, name: "Executive Room", price: 5500, img: "/image/execut.jpg", mood: "work" },
    { id: 8, name: "Luxury Room", price: 4500, img: "/image/luxury.jpg", mood: "relax" },
    { id: 9, name: "Suite Room", price: 6000, img: "/image/suite.jpg", mood: "romantic" },
    { id: 10, name: "Presidential Suite", price: 10000, img: "/image/presidential.jpg", mood: "romantic" },
    { id: 11, name: "Penthouse Room", price: 8000, img: "/image/penthouse.jpg", mood: "romantic" },
    { id: 12, name: "Accessible Room", price: 2500, img: "image/accessible.jpg", mood: "family" }
  ];

  // 🔍 Filter Rooms
  const filteredRooms =
    mood === "all" ? rooms : rooms.filter((r) => r.mood === mood);

  const loopRooms = [...filteredRooms, ...filteredRooms];

  // 🔁 Auto Scroll
  useEffect(() => {
    const container = roomRef.current;

    const interval = setInterval(() => {
      if (container) {
        container.scrollLeft += 1;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [filteredRooms]);

  return (
    <div className={`home ${mood}`}>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="search-card">
          <h2 className="search-title">
            <p>Welcome To Royal Swastik</p>
          </h2>

          <div className="search-grid">

            <div className="field">
              <label>LOCATION</label>
              <input type="text" placeholder="City" />
            </div>

            <div className="field">
              <label>CHECK IN</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>CHECK OUT</label>
              <input type="date" />
            </div>

            <div className="field">
              <label>ROOM</label>
              <select>
                <option>Room Type</option>
              </select>
            </div>

            <div className="field">
              <label>GUESTS</label>
              <select>
                <option>Guests</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

          </div>

          <button className="search-btn">Book Now</button>
        </div>
      </section>

      {/* 🌈 MOOD SELECTOR */}
      <div className="mood-section">
        <h2>✨ Choose Your Stay Mood</h2>

        <div className="mood-buttons">
          <div className="mood-buttons1">
          <button onClick={() => setMood("all")}>All</button>
          </div>
          <div className="mood-buttons2">
          <button onClick={() => setMood("relax")}>🌴 Relax</button>
          </div>
          <div className="mood-buttons3">
          <button onClick={() => setMood("work")}>💼 Work</button>
          </div>
          <div className="mood-buttons4">
          <button onClick={() => setMood("romantic")}>💑 Romantic</button>
          </div>
          <div className="mood-buttons5">
          <button onClick={() => setMood("family")}>👨‍👩‍👧 Family</button>
          </div>
        </div>
      </div>

      {/* ROOMS SCROLL */}
      <h2 className="section-title">🏨 Explore Rooms</h2>

      <div className="room-wrapper">
        <div className="room-scroll" ref={roomRef}>
          {loopRooms.map((room, index) => (
            <div className="room-item" key={index}>
              <img src={room.img} alt={room.name} />
              <p>{room.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <section className="featured">
        <h2>🗺️ Popular Locations</h2>

        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.img} alt="" />
              <div className="hotel-info">
                <h4>{hotel.name}</h4>
                <p>{hotel.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="features-title">Why Choose Royal Swastik?</h2>

        <div className="features-grid">
          <div className="feature-card1">
            <h3>🏨 Luxury Rooms</h3>
            <p>Experience premium comfort with modern amenities.</p>
          </div>

          <div className="feature-card2">
            <h3>💰 Best Price</h3>
            <p>Get the best deals at affordable prices.</p>
          </div>

          <div className="feature-card3">
            <h3>📍 Prime Locations</h3>
            <p>Stay at top destinations across cities.</p>
          </div>

          <div className="feature-card4">
            <h3>🕒 24/7 Support</h3>
            <p>We are always here to help you anytime.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h2>Royal Swastik</h2>
            <p>Experience luxury and comfort at the best price.</p>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => navigate("/")}>Home</li>
              <li>Rooms</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact</h3>
            <p>📍 Hyderabad, India</p>
            <p>📞 +91 8459602172</p>
            <p>✉️ support@royalswastik.com</p>
          </div>

          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <span>🌐</span>
              <span>📘</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Royal Swastik | All Rights Reserved
        </div>
      </footer>

    </div>
  );
}

export default Home;