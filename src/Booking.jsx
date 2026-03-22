import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "./bookingSlice";
import "./Booking.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags, faTicket } from "@fortawesome/free-solid-svg-icons";

function Booking() {

  const dispatch = useDispatch();
  const [showEmail, setShowEmail] = useState(false); 
  const [email, setEmail] = useState("");
  const toggleEmail = () => { setShowEmail(!showEmail); };

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    checkin: "",
    checkout: "",
    guests: "",
    roomType: ""
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const selectedRoom = rooms.find((r) => r.name === formData.roomType);
  const roomPrice = selectedRoom ? selectedRoom.price : 0;

  const totalAmount = roomPrice;
  const finalAmount = totalAmount - discount;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const applyCoupon = () => {

    if (coupon === "HOTEL500") {
      setDiscount(500);
    }
    else if (coupon === "SAVE10") {
      setDiscount(totalAmount * 0.1);
    }
    else {
      alert("Invalid Coupon");
      setDiscount(0);
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();

  dispatch(addBooking({
      ...formData,
      price: roomPrice,
      paymentMethod: paymentMethod,
      amount: finalAmount
    }));

    alert("Booking Confirmed!");
  };

  return (

    <div className="booking-container">

      {/* LEFT SIDE BOOKING FORM */}
    <div className="booking-card">
     <h2>Reserve Your Stay</h2>

     <form onSubmit={handleBooking}>
      <input type="text" name="name" placeholder="Full Name" required onChange={handleChange}/>
       <input type="email" name="email" placeholder="Email Address" required onChange={handleChange}/>
       <input type="tel" name="mobile" placeholder="Mobile Number" required onChange={handleChange}/>

      <div className="date-row">
        <input type="date" name="checkin" placeholder="Mobile Number" required onChange={handleChange}/>
         <input type="date" name="checkout" placeholder="Mobile Number" required onChange={handleChange}/>
      </div>
        <select name="guests" required onChange={handleChange}>
            <option value="">Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
  {/* Room Type after Guests */}
      <select name="roomType" required onChange={handleChange}>
        <option value="">Room Type</option>
          {rooms.map((room, index) => (
              <option key={index} value={room.name}>
                {room.name}
              </option>
            ))}
        </select>
         <button className="confirm-btn">
            Confirm Booking
          </button>
      </form>
   </div>
  {/* RIGHT SIDE PAYMENT DETAILS */}
     <div className="payment-card">
        <h2>Payment Details</h2>
        <div className="details">
        <p>Room : {formData.roomType || 0}</p>
        <hr style={{ margin: "5px 0", border: "1px solid #e5e0e0" }} />
        <p>Price per Night : ₹{roomPrice}</p>
        </div>
        <hr style={{ margin: "5px 0", border: "1px solid #e5e0e0" }} />
        <div className="discount">
        <p><FontAwesomeIcon icon={faTags} /> Manual Discount:</p>
        <hr style={{ margin: "5px 0", border: "1px solid #e5e0e0" }} />
        <p><FontAwesomeIcon icon={faTicket} /> Coupon Discount: </p>
        <hr style={{ margin: "5px 0", border: "1px solid #e5e0e0" }} />
        </div>
        <p><strong>Total Amount :</strong> ₹{totalAmount}</p>
        <div className="coupon-box">
        <input type="text" placeholder="Enter Coupon Code"
         value={coupon}   onChange={(e) => setCoupon(e.target.value)} />
         <button onClick={applyCoupon}>
            Apply
          </button>
        </div>
        <div className="email-toggle-row">
     <p>Email For Confirmation</p>
        <button className="toggle-email-btn" onClick={toggleEmail}>
         {showEmail ? "Hide" : "Show"}
         </button>
        </div>
      {showEmail && (
        <div className="email-input">
         <input type="email" placeholder="Enter your email"
                       value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
           )}
      <div className="payment">
          <p>Select Payment Method</p>
            <div className="payment-options">
              <button className="payment-btn">QR Code</button>
              <button className="payment-btn">Credit Card</button>
              <button className="payment-btn">On Cash</button>
            </div>
           </div>

    
      </div>  
   </div> 
  );
}

export default Booking;

