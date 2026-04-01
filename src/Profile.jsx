import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "./bookingSlice";
import "./Profile.css";

function Profile() {

  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.booking.bookings);

  // ✅ Safe user fetch with fallback
  const user = JSON.parse(localStorage.getItem("currentUser")) || {};

  // ✅ Normalize gender (handles undefined, spaces, caps)
  const gender = user?.gender?.trim()?.toLowerCase();

  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // ✅ Profile Image Logic (clean + reusable)
  const getProfileImage = () => {
    if (gender === "female") {
      return "https://cdn-icons-png.flaticon.com/512/4140/4140048.png";
    } else if (gender === "male") {
      return "https://cdn-icons-png.flaticon.com/512/4140/4140051.png";
    } else {
      return "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
    }
  };

  return (
    <div className="profile-page">

      {/* PROFILE CARD */}
      <div className="profile-card">

        {/* ✅ Profile Image */}
        <img src={getProfileImage()} alt="profile" />

        <h2>{user.name || "Guest User"}</h2>
        <p>{user.email || "No Email Added"}</p>
        <p>{user.phone || "No Mobile Number"}</p>

      </div>

      {/* BOOKINGS */}
      <div className="booking-section">

        <h2>My Bookings</h2>

        {bookings.length > 0 ? (

          bookings.map((b) => (

            <div key={b.id} className="booking-card">

              <h3>{b.roomType}</h3>
              <p><strong>Price :</strong> ₹{b.price}</p>

              <button
                className="details-btn"
                onClick={() => toggleDetails(b.id)}
              >
                {openId === b.id ? "Hide Details" : "View Details"}
              </button>

              {openId === b.id && (
                <div className="booking-details">
                  <p><strong>Check-in :</strong> {b.checkin}</p>
                  <p><strong>Check-out :</strong> {b.checkout}</p>
                  <p><strong>Guests :</strong> {b.guests}</p>
                  <p><strong>Payment :</strong> {b.paymentMethod}</p>
                  <p><strong>Total :</strong> ₹{b.amount}</p>
                </div>
              )}

              <button
                className="cancel-btn"
                onClick={() => dispatch(cancelBooking(b.id))}
              >
                Cancel Booking
              </button>

            </div>

          ))

        ) : (
          <p>No bookings yet.</p>
        )}

      </div>

    </div>
  );
}

export default Profile;