import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Account from "./Account";
import Booking from "./Booking";
import Register from "./Register";
import Offer from "./Offer";
import Room from "./Room";
import Amenities from "./Amenities";
import Profile from "./Profile";
import RulesAndPolicies from "./RulesAndPolicies";
import SignIn from "./SignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faGift,faBed,faCalendarPlus,faListCheck,faCircleInfo,faPhone,faFileContract,faUser } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Signout from "./SignOut";

function App() {
  return (
    <>
    <div className="app-root">
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-logo">
           <img src="image/Swastik.logo.png" alt="Royal Swastik Logo" className="logo-img" />
              <span className="logo-name">Royal Swastik</span>
               </div>
        <div className="nav-links">
          <NavLink to="/" className="nav-link"><FontAwesomeIcon icon={faHouse} />Home</NavLink>
          <NavLink to="/offer" className="nav-link"><FontAwesomeIcon icon={faGift } /> Offers</NavLink>
          <NavLink to="/room" className="nav-link"> <FontAwesomeIcon icon={faBed} />Room</NavLink>
          <NavLink to="/booking" className="nav-link"><FontAwesomeIcon icon={faCalendarPlus } />Booking</NavLink>
           <NavLink to="/amenities" className="nav-link"><FontAwesomeIcon icon={faListCheck } />Amenities</NavLink>
          <NavLink to="/aboutus" className="nav-link"><FontAwesomeIcon icon={faCircleInfo } />About Us</NavLink>
          <NavLink to="/contactus" className="nav-link"><FontAwesomeIcon icon={faPhone } />Contact Us</NavLink>
          <NavLink to="/rules" className="nav-link"><FontAwesomeIcon icon={faFileContract} />Policies</NavLink>
          <Account className="account"/>
        </div>
      </nav>
    <div className="page-content">
        <Routes>
         <Route path="/" element={<Home />} />
           <Route path="/offer" element={<Offer/>}/>
          <Route path="/room" element={<Room/>} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/amenities" element={<Amenities />} />
           <Route path="/contactus" element={<ContactUs />} />
          <Route path="/rules" element={<RulesAndPolicies />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signout" element={<Signout />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;

