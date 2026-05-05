import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"; // Used for redirection after login
import "../css/Auth.css"; // Styling for login/logout components

/**
 * Login component for user authentication.
 * Displays a form for users to enter their username and password.
 * Redirects to the home page upon successful login or if already logged in.
 */
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  // If the user is already logged in, redirect them to the home page
  if (isLoggedIn) {
    navigate("/");
    return null; // Don't render the login form if already logged in
  }

  /**
   * Handles the form submission for the login process.
   * Prevents default form submission, validates inputs, and calls the login function.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    const success = await login(username, password);
    if (success) {
      navigate("/"); // Redirect to home page on successful login
    } else {
      // In a real app, this error message would come from the backend.
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="auth-error">{error}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="auth-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;