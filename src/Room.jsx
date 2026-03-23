import React, { useState } from "react";
import "./Room.css";
import Booking from "./Booking";

function Room() {

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [openDetailsId, setOpenDetailsId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const rooms = [
    { id: 1, name: "Single Bed Non-AC Room", price: 1200, img: "image/singlebed.jpg", description: "Single Bed, Non-AC, Free WiFi, TV, Attached Bathroom" },
    { id: 2, name: "Single Bed AC Room", price: 2000, img: "image/singleAc.jpg", description: "Single Bed, AC, Free WiFi, TV, Complimentary Breakfast" },
    { id: 3, name: "Double Bed Non-AC Room", price: 2200, img: "image/doublebed.jpg", description: "Two Single Beds, Non-AC, Free WiFi, TV" },
    { id: 4, name: "Double Bed AC Room", price: 3000, img: "image/doubleac.jpg", description: "King Bed, AC, Free WiFi, TV, Breakfast Included" },
    { id: 5, name: "Deluxe Room", price: 3500, img: "image/deluxe.jpg", description: "King Bed, AC, Free WiFi, TV, Breakfast Included" },
    { id: 6, name: "Family Room", price: 5000, img: "image/family.jpg", description: "Two Double Beds, AC, Free WiFi, TV, Breakfast" },
    { id: 7, name: "Executive Room", price: 5500, img: "/image/execut.jpg", description: "King Bed, Work Desk, Mini Bar, Free WiFi, Breakfast" },
    { id: 8, name: "Luxury Room", price: 4500, img: "/image/luxury.jpg", description: "King Bed, Smart TV, Mini Bar, Free WiFi, Dinner Included" },
    { id: 9, name: "Suite Room", price: 6000, img: "/image/suite.jpg", description: "Separate Living Area, King Bed, Mini Bar, All Meals" },
    { id: 10, name: "Presidential Suite", price: 10000, img: "/image/presidential.jpg", description: "Private Lounge, Jacuzzi, Luxury Amenities, All Meals" },
    { id: 11, name: "Penthouse Room", price: 8000, img: "/image/penthouse.jpg", description: "Top Floor View, King Bed, Balcony, Mini Bar, Free WiFi" },
    { id: 12, name: "Accessible Room", price: 2500, img: "image/accessible.jpg", description: "Wheelchair Friendly, AC, Free WiFi, TV, Safety Rails" }
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(rooms.length / itemsPerPage);

  const indexOfLastRoom = currentPage * itemsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - itemsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const toggleDetails = (id) => {
    setOpenDetailsId(openDetailsId === id ? null : id);
  };

  return (
    <div className="room-layout">

      {/* LEFT SECTION */}
      <div className="room-main">

        {/* ROOM GRID */}
        <div className="room-grid">
          {(selectedRoom ? [selectedRoom] : currentRooms).map((room) => (
            <div key={room.id} className="room-card">

              <img src={room.img} alt={room.name} />

              <h3>{room.name}</h3>

              <p className="price">₹{room.price} / night</p>

              <button
                className="details-btn"
                onClick={() => toggleDetails(room.id)}
              >
                {openDetailsId === room.id ? "Hide Details" : "View Details"}
              </button>

              {openDetailsId === room.id && (
                <div className="room-details">
                  <p>{room.description}</p>
                </div>
              )}

              <button
                className="book-btn"
                onClick={() => setSelectedRoom(room)}
              >
                Book Now
              </button>

            </div>
          ))}
        </div>

        {/* PAGINATION BELOW GRID */}
        {!selectedRoom && (
          <div className="pagination">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>

          </div>
        )}

      </div>

      {/* BOOKING PANEL */}
      {selectedRoom && (
        <div className="booking-side">

          <div className="booking-header">
            <h3>{selectedRoom.name}</h3>
            <span onClick={() => setSelectedRoom(null)}>✕</span>
          </div>

          <Booking room={selectedRoom} />

        </div>
      )}

    </div>
  );
}

export default Room;