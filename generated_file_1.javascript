import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css'; // Import the corresponding CSS file

/**
 * LoginPage component for user authentication.
 * Allows users to input their username and password to log in.
 *
 * @returns {JSX.Element} The login page UI.
 */
const LoginPage = () => {
  // State variables to store username and password input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // useNavigate hook from react-router-dom for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles the form submission for the login process.
   * Prevents default form behavior, logs credentials, and simulates a successful login.
   * In a real application, this would involve an API call for authentication.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the browser from reloading the page
    console.log('Login attempt:', { username, password });

    // --- Placeholder for actual authentication logic ---
    // In a production app, you would send a request to your backend API here:
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username, password }),
    //   });
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Store user token/session, update global auth state
    //     alert('Login successful!');
    //     navigate('/'); // Redirect to home or dashboard
    //   } else {
    //     alert(data.message || 'Login failed!');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   alert('An error occurred during login.');
    // }
    // --- End of placeholder ---

    // For demonstration, we'll simulate a successful login and redirect
    alert('Login successful! (Simulated)');
    navigate('/'); // Redirect to the home page after simulated login
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required // Make username field mandatory
              aria-label="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Make password field mandatory
              aria-label="Password"
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;