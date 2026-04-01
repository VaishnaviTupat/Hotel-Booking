import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("✨ Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Royal Swastik</h1>
          <p>We’d love to hear from you 💬</p>
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="contact-info">
        <div className="info-card1">
          <h3>📍 Address</h3>
          <p>New Sai Nagar, Hyderabad</p>
        </div>

        <div className="info-card2">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>

        <div className="info-card3">
          <h3>📧 Email</h3>
          <p>info@royalswastik.com</p>
        </div>

        <div className="info-card4">
          <h3>📸 Instagram</h3>
          <p>@royalswastikhotel</p>
        </div>

        <div className="info-card5">
          <h3>👍 Facebook</h3>
          <p>@royalswastik</p>
        </div>
      </div>

      {/* FORM */}
      <div className="contact-form-container">
        <h2>Send Us a Message</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="send-btn">
            Send Message 🚀
          </button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </div>

    </div>
  );
}

export default ContactUs;