import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useNavigate
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBed,
  faCalendarPlus,
  faPhone,
  faUser,
  faListCheck,
  faGift,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

/* PAGES */
import Home from "./Home";
import Room from "./Room";
import Booking from "./Booking";
import Amenities from "./Amenities";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Profile from "./Profile";
import Offer from "./Offer";
import SignOut from "./SignOut";
import SignIn from "./SignIn";
import Register from "./Register";

/* ================= NAVBAR ================= */
function Navbar() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const [open, setOpen] = useState(false);

  // ✅ Close dropdown when clicking outside
  const handleOutsideClick = () => {
    if (open) setOpen(false);
  };

  return (
    <div className="navbar" onMouseLeave={handleOutsideClick}>

      {/* LOGO */}
      <div className="nav-logo" onClick={() => navigate("/")}>
        <img src="/image/Swastik.logo.png" alt="logo" className="logo-img" />
        <span className="logo-name">Royal Swastik</span>
      </div>

      {/* NAV LINKS */}
      <div className="nav-links">

        <NavLink to="/" className="nav-link">
          <FontAwesomeIcon icon={faHouse} /> Home
        </NavLink>

        <NavLink to="/offers" className="nav-link">
          <FontAwesomeIcon icon={faGift} /> Offers
        </NavLink>

        <NavLink to="/room" className="nav-link">
          <FontAwesomeIcon icon={faBed} /> Room
        </NavLink>

        <NavLink to="/booking" className="nav-link">
          <FontAwesomeIcon icon={faCalendarPlus} /> Booking
        </NavLink>

        <NavLink to="/amenities" className="nav-link">
          <FontAwesomeIcon icon={faListCheck} /> Amenities
        </NavLink>

        <NavLink to="/about" className="nav-link">
          <FontAwesomeIcon icon={faCircleInfo} /> About Us
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          <FontAwesomeIcon icon={faPhone} /> Contact
        </NavLink>

      </div>

      {/* ACCOUNT */}
      <div className="account-section">


          {open && (
            <div className="dropdown">

              {currentUser ? (
                <>
                  <div onClick={() => navigate("/profile")}>Profile</div>
                  <div onClick={() => navigate("/signout")}>Sign Out</div>
                </>
              ) : (
                <>
                  <div onClick={() => navigate("/signin")}>Sign In</div>
                  <div onClick={() => navigate("/register")}>Register</div>
                </>
              )}

            </div>
          )}
           
            {currentUser && (
          <span className="username">Welcome {currentUser.name}</span>
        )}
           
           <div className="user-menu">
          <FontAwesomeIcon
            icon={faUser}
            className="user-icon"
            onClick={() => setOpen(!open)}
          />
        </div>

      </div>

    </div>
  );
}

/* ================= APP ================= */
function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="page-content">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/room" element={<Room />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

        </Routes>

      </div>

    </Router>
  );
}

export default App;