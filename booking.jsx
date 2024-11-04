import React, { useState } from 'react';
import './booking.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function RoomDetailPage() {
    const [startDate, setStartDate] = useState(new Date());
    const [duration, setDuration] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [showModal, setShowModal] = useState(false); // State for controlling the modal
    const navigate = useNavigate();

    const durationOptions = ['1 Hour', '2 Hours', '3 Hours', '4 Hours', '5 Hours'];
    const timeOptions = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'];

    const handleConfirm = () => {
        setShowModal(true); // Show modal on confirm
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/'); // Navigate back to Homepage after closing modal
    };

    return (
        <div className="container-fluid room-detail-page">
            <header className="d-flex justify-content-between align-items-center py-3">
                <button className="menu-btn">
                    <i className="bi bi-list"></i>
                </button>
                <h1 className="text-center">ROOM 001</h1>
                <button className="profile-btn">
                    <i className="bi bi-person-circle"></i>
                </button>
            </header>

            <div className="content-container mt-5">
                <div className="date-picker mb-3">
                    <label htmlFor="date">Select Date:</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="duration">Duration:</label>
                    <select
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="form-control"
                    >
                        <option value="">Select Duration</option>
                        {durationOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="time">Time:</label>
                    <div className="d-flex">
                        <select
                            id="start-time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="form-control me-2"
                        >
                            <option value="">Start Time</option>
                            {timeOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>

                        <select
                            id="end-time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="form-control"
                        >
                            <option value="">End Time</option>
                            {timeOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="price-container mb-3">
                    <span>Price: </span>
                    <div className="price">RM 100</div>
                </div>

                <button
                    className="btn btn-primary w-100"
                    onClick={handleConfirm}
                >
                    Confirm
                </button>
            </div>

            {/* Modal for success message */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Booking Successful</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Your booking has been successfully saved.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handleCloseModal}>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RoomDetailPage;
