import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "./bookingSlice";
import "./Profile.css";

function Profile() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.booking.user);
  const bookings = useSelector((state) => state.booking.bookings);

  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="profile-page">

      {/* PROFILE CARD */}
      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
        />

        <h2>{user?.name || "Guest User"}</h2>
        <p>{user?.email || "No Email Added"}</p>
        <p>{user?.mobile || "No Mobile Number"}</p>

      </div>


      {/* BOOKINGS SECTION */}
      <div className="booking-section">

        <h2>My Bookings</h2>

        {bookings.length > 0 ? (

          bookings.map((b) => (

            <div key={b.id} className="booking-card">

              {/* Room Info */}
              <h3>{b.roomType}</h3>
              <p><strong>Price :</strong> ₹{b.price} / night</p>

              {/* Toggle Button */}
              <button
                className="details-btn"
                onClick={() => toggleDetails(b.id)}
              >
                {openId === b.id ? "Hide Details" : "View Details"}
              </button>

              {/* Dynamic Booking Details */}
              {openId === b.id && (

                <div className="booking-details">

                  <p><strong>Check-in :</strong> {b.checkin}</p>
                  <p><strong>Check-out :</strong> {b.checkout}</p>
                  <p><strong>Guests :</strong> {b.guests}</p>
                  <p><strong>Payment Method :</strong> {b.paymentMethod}</p>
                  <p><strong>Total Paid :</strong> ₹{b.amount}</p>

                </div>

              )}

              {/* Cancel Booking */}
              <button
                className="cancel-btn"
                onClick={() => dispatch(cancelBooking(b.id))}
              >
                Cancel Booking
              </button>

            </div>

          ))

        ) : (

          <p className="no-booking">No bookings yet.</p>

        )}

      </div>

    </div>
  );
}

export default Profile;