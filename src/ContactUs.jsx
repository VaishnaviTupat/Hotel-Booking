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

    setMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Royal Swastik</h1>
          <p>We would love to hear from you</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info">
        <div className="info-card">
          <h3>Address</h3>
          <p>New sai nagar, Hyderabad</p>
        </div>
        <div className="info-card">
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        </div>
        <div className="info-card">
          <h3>Email</h3>
          <p>info@royalSwastik.com</p>
        </div>
         <div className="info-card">
          <h3>Insta</h3>
          <p>#royalSwastikhotel</p>
        </div>
         <div className="info-card">
          <h3>facebook</h3>
          <p>@royalswastik</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {message && <p className="form-message">{message}</p>}
      </div>

    </div>
  );
}

export default ContactUs;
