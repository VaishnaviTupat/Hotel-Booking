import React from "react";
import { useNavigate } from "react-router-dom";
import "./RulesAndPolicies.css";

function RulesAndPolicies() {
  const navigate = useNavigate();

  return (
    <div className="rules-page">
      <div className="rules-container">
        <h2>Rules & Policies</h2>
        <p className="rules-subtitle">
          Please review and accept the rules before proceeding.
        </p>

        <ol className="rules-list">
          <li><strong>Check-In & Check-Out:</strong> Check-in after 2:00 PM and check-out before 11:00 AM.</li>
          <li><strong>Booking & Payment:</strong> Valid ID and advance/full payment may be required.</li>
          <li><strong>Cancellation:</strong> Free cancellation up to 24 hours before check-in.</li>
          <li><strong>Refund:</strong> Approved refunds are processed within 5–7 working days.</li>
          <li><strong>Guest Limit:</strong> Guests must not exceed the room’s maximum occupancy.</li>
          <li><strong>Damage Policy:</strong> Guests are responsible for any damage to hotel property.</li>
          <li><strong>Smoking & Alcohol:</strong> Smoking in non-smoking rooms is strictly prohibited.</li>
          <li><strong>Pets:</strong> Pets are not allowed unless clearly mentioned during booking.</li>
          <li><strong>Guest Conduct:</strong> Illegal activities and disturbance of other guests are not allowed.</li>
          <li><strong>Privacy:</strong> Guest information is kept confidential and used only for service purposes.</li>
        </ol>

        <p className="rules-footer">
          By clicking “I Agree”, you accept all the above rules and policies.
        </p>

        <button
          className="agree-btn"
          onClick={() => navigate("/booking")}
        >
          I Agree
        </button>
      </div>
    </div>
  );
}

export default RulesAndPolicies;