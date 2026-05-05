    // frontend-Movie-React/src/components/Header.jsx (Example structure)
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { useAuthContext } from '../contexts/AuthContext'; // Import useAuthContext
    import LogoutButton from './LogoutButton'; // Import LogoutButton

    // You might also want to import a CSS file for your Header if it has specific styles
    // import '../css/Header.css';

    const Header = () => {
      const { isLoggedIn, user } = useAuthContext();

      return (
        <header className="app-header">
          <nav className="main-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>

            <div className="auth-section">
              {isLoggedIn ? (
                <>
                  <span className="welcome-message">Welcome, {user?.username}!</span>
                  <LogoutButton /> {/* Render logout button if logged in */}
                </>
              ) : (
                <Link to="/login" className="nav-link auth-link">Login</Link> {/* Show login link if not logged in */}
              )}
            </div>
          </nav>
        </header>
      );
    };

    export default Header;