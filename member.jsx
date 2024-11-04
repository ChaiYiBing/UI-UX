import React, { useState } from "react";
import styles from './member.css';
import Homepage from "./homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Member = () => {
  const [showModal, setShowModal] = useState(false); // State for controlling the modal
  const navigate = useNavigate();

  const handleConfirm = () => {
    setShowModal(true); // Show modal on confirm
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Navigate back to Homepage after closing modal
  };

  return (
    <section className={`d-flex flex-column ${styles.member}`}>
      {/* Title Bar */}
      <header className="d-flex justify-content-center align-items-center py-3">
        <h1 className="text-center">Become a Member</h1>
      </header>

      {/* Pricing Card in Content */}
      <div className="d-flex flex-grow-1 align-items-center justify-content-center">
        <div className="card text-center p-4" style={{ width: '18rem', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="card-body">
            <h5 className="card-title">Premium Membership</h5>
            <p className="card-text">Enjoy exclusive perks, discounts, and more!</p>
            <h3 className="card-price">RM 199/year</h3>
            <button className="btn btn-primary mt-3" onClick={handleConfirm}>Join Now</button>
          </div>
        </div>
      </div>

      {/* Home Icon at the Bottom */}
      <footer className="d-flex justify-content-center align-items-center py-3">
        <i 
          className="bi bi-house-door" 
          style={{ fontSize: '24px', cursor: 'pointer' }}
          onClick={() => navigate('/')}
          aria-label="Home"
        ></i>
      </footer>

      {/* Modal for success message */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Congratulations</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Congrats, you have become a member!</p>
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
    </section>
  );
};

export default Member;
