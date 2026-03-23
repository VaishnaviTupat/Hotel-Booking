import React, { useRef, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const roomRef = useRef();   // ✅ new ref

  const hotels = [
    { name: "Hyderabad", price: "₹3500", img: "/image/Hotel6.jpg"},
    { name: "Mumbai", price: "₹3200", img: "/image/Hotel5.jpg" },
    { name: "Chennai", price: "₹3000", img: "/image/hotel3.jpg"},
    { name: "Surat", price: "₹3200", img: "/image/Hotel4.jpg"}
  ];

  const rooms = [
    { id: 1, name: "Single Bed Non-AC Room", price: 1200, img: "image/singlebed.jpg", description: "Single Bed, Non-AC, Free WiFi, TV, Attached Bathroom" },
    { id: 2, name: "Single Bed AC Room", price: 2000, img: "image/singleAc.jpg", description: "Single Bed, AC, Free WiFi, TV, Complimentary Breakfast" },
    { id: 3, name: "Double Bed Non-AC Room", price: 2200, img: "image/doublebed.jpg", description: "Two Single Beds, Non-AC, Free WiFi, TV" },
    { id: 4, name: "Double Bed AC Room", price: 3000, img: "image/doubleac.jpg", description: "King Bed, AC, Free WiFi, TV, Breakfast Included" },
    { id: 5, name: "Deluxe Room", price: 3500, img: "image/deluxe.jpg", description: "King Bed, AC, Free WiFi, TV, Breakfast Included" },
    { id: 6, name: "Family Room", price: 5000, img: "image/family.jpg", description: "Two Double Beds, AC, Free WiFi, TV, Breakfast" },
    { id: 7, name: "Executive Room", price: 5500, img: "/image/execut.jpg", description: "King Bed, Work Desk, Mini Bar, Free WiFi, Breakfast" },
    { id: 8, name: "Luxury Room", price: 4500, img: "/image/luxury.jpg", description: "King Bed, Smart TV, Mini Bar, Free WiFi, Dinner Included" },
    { id: 9, name: "Suite Room", price: 6000, img: "/image/suite.jpg", description: "Separate Living Area, King Bed, Mini Bar, All Meals" },
    { id: 10, name: "Presidential Suite", price: 10000, img: "/image/presidential.jpg", description: "Private Lounge, Jacuzzi, Luxury Amenities, All Meals" },
    { id: 11, name: "Penthouse Room", price: 8000, img: "/image/penthouse.jpg", description: "Top Floor View, King Bed, Balcony, Mini Bar, Free WiFi" },
    { id: 12, name: "Accessible Room", price: 2500, img: "image/accessible.jpg", description: "Wheelchair Friendly, AC, Free WiFi, TV, Safety Rails" }
  ];

  const loopRooms = [...rooms, ...rooms]; // ✅ duplicate

  // ✅ AUTO SCROLL LIKE CATEGORY
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
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
         <div className="hero-overlay"></div>

        <div className="hero-left">
          <h1>Welcome To Royal Swastik</h1>
          <p>Find and book amazing hotels easily</p>
        </div>

        <div className="search-card">
          <div className="field">
            <label>Location</label>
            <input type="text" placeholder="City" />
          </div>

          <div className="field">
            <label>Room</label>
            <select className="field-room">
              <option value="">Room Type</option>
              {rooms.map((room, index) => (
                <option key={index}>{room.name}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Check In</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Check Out</label>
            <input type="date" />
          </div>

          <button 
            className="search-btn" 
            onClick={() => navigate("/room")}
          >
            Search
          </button>
        </div>
      </section>

      {/* 🔥 ROOM SCROLL (UPDATED LIKE CATEGORY) */}
      <h2 className="section-title">🏨 Explore Rooms</h2>

      <div className="room-wrapper">
        <div className="room-scroll" ref={roomRef}>
          {loopRooms.map((room, index) => (
            <div className="room-item" key={index}>
              <img src= {room.img} alt={room.name} />
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

    </div>
  );
}

export default Home;
