// Homepage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import './homepage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Homepage() {
    const navigate = useNavigate(); // Get the history object

    return (
        <div className="container-fluid homepage">
            <header className="d-flexS justify-content-between align-items-center py-3">
                <button className="menu-btn">
                    <i className="bi bi-list"></i> {/* Bootstrap icon for menu */}
                </button>
                <h1 className="text-center">Karaoke Booking</h1>
                <button className="profile-btn" onClick={()=>navigate('profile')}>
                    <i className="bi bi-person-circle"></i> {/* Bootstrap icon for profile */}
                </button>
            </header>

            <div className="button-container d-flex flex-column align-items-center mt-5">
                <button className="option-btn mb-3" onClick={()=>navigate('room')}>ROOM BOOKING</button>
                <button className="option-btn mb-3"onClick={()=>navigate('member')}>Become member</button>
                <button className="option-btn" onClick={()=>navigate('notification')}>Notification</button>
            </div>

            <div className="footer d-flex justify-content-center align-items-center mt-5">
                <i className="bi bi-box-arrow-right"></i> {/* Bootstrap icon for exit */}
            </div>
        </div>
    );
}

export default Homepage;
