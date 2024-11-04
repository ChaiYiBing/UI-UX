import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css'; // Make sure to add this CSS file

function ProfilePage() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleDoneClick = () => {
    // You can add any action here, such as saving data or giving feedback
    alert("Changes saved!");
    navigate('/'); // Navigate back to the homepage or any other page
  };

  return (
    <main className="profile-page d-flex flex-column align-items-center p-3" style={{ backgroundColor: '#FAF3FF', height: '100vh' }}>
      {/* Profile Header */}
      <h1 className="text-center mb-3">Profile</h1>

      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/100" // Replace with your image source URL
        alt="Profile"
        className="profile-image mb-3 rounded-circle"
        style={{ width: '100px', height: '100px' }}
      />

      {/* Name Input */}
      <div className="form-group w-75 mb-3">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
        />
      </div>

      {/* Password Input */}
      <div className="form-group w-75 mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      {/* Done Button */}
      <button
        className="btn btn-primary w-50 mb-3"
        onClick={handleDoneClick}
      >
        Done
      </button>

      {/* Home Icon Button */}
      <button
        className="bg-transparent border-0 position-fixed bottom-0 mb-3"
        onClick={handleHomeClick}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png" // Replace with your home icon URL
          alt="Home"
          style={{ width: '40px' }}
        />
      </button>
    </main>
  );
}

export default ProfilePage;
