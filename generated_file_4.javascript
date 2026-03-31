import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported
import '../css/Navbar.css';

/**
 * Navbar Component
 *
 * Renders the main navigation bar for the application,
 * including links to the Home, Favorites, and Login pages.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MovieApp
      </Link>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/login" className="nav-link"> {/* <--- ADD THIS LOGIN LINK */}
          Login
        </Link>
        {/* Add a logout link here later when you implement authentication state */}
      </div>
    </nav>
  );
}

export default Navbar;