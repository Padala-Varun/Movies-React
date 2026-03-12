import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../css/Navbar.css";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/favorites" className="nav-link">
              Favorites
            </Link>
            <span className="user-name">Hi, {user?.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="nav-link login-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
