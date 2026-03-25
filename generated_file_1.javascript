import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/Login.css'; // Import the CSS for this component

/**
 * LoginPage component for user authentication.
 * Manages username and password input, and simulates a login process.
 */
const LoginPage = () => {
  // State hooks for managing username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles the form submission for login.
   * Prevents default form behavior, logs credentials, and simulates a successful login
   * by navigating to the home page.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // In a real application, you would send these credentials to a backend API
    // for authentication (e.g., using Axios or Fetch).
    console.log('Attempting login with:', { username, password });

    // Simulate a successful login for demonstration purposes
    alert('Login successful! Redirecting to home page.');

    // Redirect to the home page after "successful" login
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
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
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>

        <p className="login-link">
          Don't have an account? <Link to="/register">Register here</Link>
          {/* Note: The /register route and component would need to be created separately. */}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;