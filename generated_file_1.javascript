// frontend-Movie-React/src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import '../css/Login.css'; // Import the dedicated CSS for the Login page

/**
 * @typedef {Object} LoginProps
 * @property {function} onLogin - Callback function to be called upon successful login.
 */

/**
 * Login component for user authentication.
 * Provides a form for users to enter their email and password.
 *
 * @param {LoginProps} props - The properties for the Login component.
 * @returns {JSX.Element} The Login page component.
 */
function Login({ onLogin }) {
  // State to manage the email input field
  const [email, setEmail] = useState('');
  // State to manage the password input field
  const [password, setPassword] = useState('');
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  /**
   * Handles the form submission for login.
   * Prevents default form submission behavior, logs credentials,
   * and simulates a successful login by navigating to the home page.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Login attempt with:', { email, password });

    // In a real application, you would send these credentials to a backend API
    // and handle the response (e.g., store a token, update user context).

    // Simulate successful login
    if (onLogin) {
      onLogin(email); // Call the onLogin callback if provided
    }
    alert('Login successful! Redirecting to home...');
    navigate('/'); // Navigate to the home page after successful login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
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
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;