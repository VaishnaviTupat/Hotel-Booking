import React from "react";
import "./Offer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

function Offer() {
    const offers = [
  {
    id: 1,
    title: "Summer Special Offer",
    discount: "30% OFF",
    description: "Enjoy cool comfort this summer with exclusive discount.",
    code: "SUMMER30",
    validTill: "Valid till 30 June 2026"
  },
  {
    id: 2,
    title: "Weekend Getaway",
    discount: "20% OFF",
    description: "Book for 2 nights and get special weekend savings.",
    code: "WEEKEND20",
    validTill: "Valid till 31 March 2026"
  },
  {
    id: 3,
    title: "Luxury Suite Deal",
    discount: "40% OFF",
    description: "Premium suite experience with discounted price.",
    code: "SUITE40",
    validTill: "Limited Time Offer"
  }
];
  return (
    <div className="offers-page">
      <h2 className="offers-title">
        🎁 Exclusive Hotel 🎁
          </h2>

      <div className="offers-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <div className="offer-badge">{offer.discount}</div>

            <h3>{offer.title}</h3>
            <p>{offer.description}</p>

            <div className="offer-code">
              Promo Code: <span>{offer.code}</span>
            </div>

            <div className="validity">{offer.validTill}</div>

            <button className="offer-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;
