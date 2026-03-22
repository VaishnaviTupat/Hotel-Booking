import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

function Account() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="account-wrapper" ref={ref}>
      <button className="nav-link account-btn" onClick={() => setOpen(!open)}>
        Account ▾
      </button>

      {open && (
        <div className="account-dropdown">
          <button onClick={() => navigate("/register")}>Register</button>
          <button onClick={() => navigate("/signin")}>SignIn</button>
           <button onClick={() => navigate("/profile")}>Profile</button>
           <button onClick={() => navigate("/signout")}>SignOut</button>
        </div>
      )}
    </div>
  );
}

export default Account;