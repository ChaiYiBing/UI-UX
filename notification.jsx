import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './notification.css';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState('on');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleNotificationChange = (e) => {
        const value = e.target.value;
        setNotifications(value);

        // Set modal message based on the option selected
        if (value === 'on') {
            setModalMessage('You have turned on notifications.');
        } else {
            setModalMessage('You have turned off notifications.');
        }
        setShowModal(true); // Show modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close modal
    };

    return (
        <div className="container-fluid notification-page" style={{ backgroundColor: '#EAD1E6' }}>
            {/* Title Bar */}
            <header className="d-flex justify-content-center align-items-center py-3">
                <h1 className="text-center">Notification</h1>
            </header>

            {/* Content Container */}
            <div className="content-container d-flex justify-content-between align-items-center p-4">
                <span>Turn On/Off Notifications:</span>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="on"
                            checked={notifications === 'on'}
                            onChange={handleNotificationChange}
                        />
                        On
                    </label>
                    <label className="ms-3">
                        <input
                            type="radio"
                            value="off"
                            checked={notifications === 'off'}
                            onChange={handleNotificationChange}
                        />
                        Off
                    </label>
                </div>
            </div>

            {/* Back Icon */}
            <footer className="d-flex justify-content-center align-items-center py-3">
                <i 
                    className="bi bi-arrow-left" 
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                    aria-label="Back"
                ></i>
            </footer>

            {/* Modal for Notification Message */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Notification</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{modalMessage}</p>
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
};

export default NotificationPage;
