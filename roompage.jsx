// RoomPage.js
import React, { useState } from 'react';
import './roompage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

function RoomPage() {
    const [activeRooms, setActiveRooms] = useState([false, false, false, false]);
    const navigate = useNavigate();

    const toggleRoom = (index) => {
        setActiveRooms((prev) => {
            const newActiveRooms = [...prev];
            newActiveRooms[index] = !newActiveRooms[index];
            return newActiveRooms;
        });
    };

    const goToBooking = () => {
        navigate('/room/001'); // Navigate to booking page
    };

    return (
        <div className="container-fluid room-page">
            <header className="d-flex justify-content-between align-items-center py-3">
                <button className="menu-btn">
                    <i className="bi bi-list"></i> {/* Bootstrap icon for menu */}
                </button>
                <h1 className="text-center">Room Selection</h1>
                <button className="profile-btn">
                    <i className="bi bi-person-circle"></i> {/* Bootstrap icon for profile */}
                </button>
            </header>

            <div className="room-container mt-5">
                {[1, 2, 3, 4].map((room, index) => (
                    <div
                        className="room d-flex justify-content-between align-items-center"
                        key={index}
                        onClick={room === 1 ? goToBooking : null} // Navigate on ROOM 001 click
                    >
                        <span className="room-label">ROOM {room.toString().padStart(3, '0')}</span>
                        <span
                            className={`toggle ${activeRooms[index] ? 'active' : 'inactive'}`}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent navigation when toggling
                                toggleRoom(index);
                            }}
                            aria-label={`Toggle selection for ROOM ${room}`}
                        >
                            {activeRooms[index] ? (
                                <i className="bi bi-circle-fill"></i> // Solid icon
                            ) : (
                                <i className="bi bi-circle"></i> // Unsold icon
                            )}
                        </span>
                    </div>
                ))}
            </div>

            <div className="footer d-flex justify-content-around align-items-center mt-5">
                <i className="bi bi-box-arrow-right" aria-label="Exit" style={{ fontSize: '24px', cursor: 'pointer' }}></i>
                <i
                    className="bi bi-house-door"
                    aria-label="Home"
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                ></i>
            </div>
        </div>
    );
}

export default RoomPage;
