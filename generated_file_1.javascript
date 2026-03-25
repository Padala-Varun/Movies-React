import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css'; // Import the new CSS file for styling

/**
 * Login component for user authentication.
 * Provides a form for users to enter their email and password to log in.
 */
const Login = () => {
  // State variables to store user input for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Use navigate hook for programmatic navigation after login
  const navigate = useNavigate();

  /**
   * Handles changes to the input fields.
   * Updates the corresponding state variable based on the input's name.
   * @param {Object} e - The event object from the input change.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  /**
   * Handles the form submission.
   * Prevents default form submission, logs the credentials (for now),
   * and navigates to the home page upon successful "login".
   * In a real application, this would involve an API call for authentication.
   * @param {Object} e - The event object from the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // For demonstration: log the credentials
    console.log('Login attempt with:', { email, password });

    // In a real application, you would send these credentials to your backend
    // If login is successful:
    // navigate('/'); // Redirect to home page or dashboard
    // alert('Login successful!');

    // For now, just simulate a successful login and redirect
    alert('Login functionality is under development. Redirecting to Home.');
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link> {/* Placeholder for a signup link */}
        </p>
      </form>
    </div>
  );
};

export default Login;