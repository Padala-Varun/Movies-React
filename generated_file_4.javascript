import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Used for redirection after logout
import "../css/Auth.css"; // Styling for login/logout components

/**
 * LogoutButton component.
 * Displays a button that, when clicked, logs out the current user.
 * The button is only rendered if a user is currently logged in.
 */
const LogoutButton = () => {
  const { isLoggedIn, logout } = useAuthContext();
  const navigate = useNavigate();

  /**
   * Handles the logout action.
   * Calls the logout function from the AuthContext and redirects the user to the home page.
   */
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page after logout
  };

  // Only render the logout button if the user is logged in
  if (!isLoggedIn) {
    return null;
  }

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;