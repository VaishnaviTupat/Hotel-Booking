import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignOut.css";

function SignOut() {

  const navigate = useNavigate();

  const handleSignOut = () => {
    // clear user data
    localStorage.removeItem("user");

    alert("You have been signed out successfully!");

    navigate("/signin"); // redirect to login page
  };

  return (
    <div className="signout-container">

      {/* LEFT SIDE */}
      <div className="signout-left">
        <h2>Sign Out</h2>
        <p>Are you sure you want to sign out from your account?</p>

        <button className="signout-btn" onClick={handleSignOut} >
          Sign Out
        </button>

        <button
          className="cancel-btn"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="signout-right">
        <h3>Session Summary</h3>

        <div className="summary-item">
          <span>User:</span>
          <span>Vaishnavi</span>
        </div>

        <div className="summary-item">
          <span>Status:</span>
          <span>Logged In</span>
        </div>

        <div className="summary-item">
          <span>Last Action:</span>
          <span>Room Booking</span>
        </div>

        <div className="summary-item">
          <span>Time:</span>
          <span>{new Date().toLocaleString()}</span>
        </div>
      </div>

    </div>
  );
}

export default SignOut;