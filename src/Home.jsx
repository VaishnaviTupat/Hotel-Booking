import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

  const hotels = [
    { name: "Hyderabad", price: "₹3500", img: "/image/Hotel6.jpg"},
    { name: "Mumbai", price: "₹3200", img: "/image/Hotel5.jpg" },
    { name: "Chennai", price: "₹3000", img: "/image/hotel3.jpg"},
    { name: "Surat", price: "₹3200", img: "/image/Hotel4.jpg"}
  ];
const rooms = [
    { name: "Single Bed Non-AC Room", price: 1200 },
    { name: "Single Bed AC Room", price: 2000 },
    { name: "Double Bed Non-AC Room", price: 2200 },
    { name: "Double Bed AC Room", price: 3000 },
    { name: "Deluxe Room", price: 3500 },
    { name: "Family Room", price: 5000 },
    { name: "Executive Room", price: 5500 },
    { name: "Luxury Room", price: 4500 },
    { name: "Suite Room", price: 6000 },
    { name: "Presidential Suite", price: 10000 },
    { name: "Penthouse Room", price: 8000 },
    { name: "Accessible Room", price: 2500 }
  ];
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">

        <div className="hero-left">
          <h1>Explore the World</h1>
          <p>Find and book amazing hotels easily</p>
        </div>

        <div className="hero-right">
          <img src="public/image/bi1.jpg" alt="travel" />
        </div>

        {/* FLOATING SEARCH CARD */}
        <div className="search-card">
          <div className="field">
            <label>Location</label>
            <input type="text" placeholder="City" />
          </div>

           <div className="field">
            <label>Room</label>
           <select name="roomType" className="field-room" required onChange={handleChange}>
             <option value="">Room Type</option>
                {rooms.map((room, index) => (
                   <option key={index} value={room.name}>
                {room.name}
              </option>
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

     <button className="search-btn" onClick={() => navigate("/room")}>
      Search
    </button>
        </div>

      </section>

      {/* FEATURED */}
      <section className="featured">
        <h2>Popular Locations</h2>

        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.img} alt="" />
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p>{hotel.price} / night</p>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* FEATURES */}
<section className="features">

  <h2>Why Choose Royal Swastik?</h2>

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