// frontend-Movie-React/src/components/Navbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'; // Assuming you have Navbar styles
// import { useAuth } from '../contexts/AuthContext'; // <--- You would create an AuthContext

const Navbar = () => {
  const navigate = useNavigate();
  // const { isAuthenticated, logout } = useAuth(); // <--- Get auth state from context

  // Placeholder for authentication status
  const isAuthenticated = false; // Replace with actual auth check (e.g., from AuthContext)

  const handleLogout = () => {
    // logout(); // Call the logout function from AuthContext
    navigate('/logout'); // Navigate to the logout route to trigger logout logic
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MovieApp</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/favorites">Favorites</Link>
        </li>
        {/* Conditional rendering for Login/Logout */}
        {isAuthenticated ? (
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link logout-button">Logout</button>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;