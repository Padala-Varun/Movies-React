// frontend-Movie-React/src/components/Navbar.jsx (Example modification)

import { Link } from 'react-router-dom';
// ... other imports

function Navbar({ isLoggedIn, onLogout }) { // Accept isLoggedIn and onLogout props
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MovieApp
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/favorites">Favorites</Link> {/* Example: Only show favorites if logged in */}
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;