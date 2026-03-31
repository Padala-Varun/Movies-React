import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/LoginPage.css'; // Import the CSS for this component

/**
 * LoginPage Component
 *
 * Renders a login form allowing users to enter their email and password.
 * It handles form submission, displays validation errors, and simulates
 * an API call for authentication. Upon successful login, it redirects
 * the user to the home page.
 */
function LoginPage() {
  // State variables for email, password, and any error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  /**
   * Handles the form submission event.
   * Prevents default form behavior, performs basic validation,
   * and simulates an asynchronous login API call.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear any previous errors

    // Basic client-side validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // --- Placeholder for actual API call ---
    // In a real application, you would make an HTTP request to your backend
    // authentication endpoint here (e.g., using Axios or Fetch API).
    try {
      // Simulate an API call with a delay
      const response = await new Promise(resolve => setTimeout(() => {
        // Simulate successful login for specific credentials
        if (email === 'user@example.com' && password === 'password') {
          resolve({ success: true, token: 'fake-jwt-token-123' });
        } else {
          // Simulate failed login for incorrect credentials
          resolve({ success: false, message: 'Invalid email or password.' });
        }
      }, 1000)); // Simulate 1-second network delay

      if (response.success) {
        // Store the authentication token (e.g., in localStorage)
        // This token would typically be sent with subsequent requests
        localStorage.setItem('authToken', response.token);
        navigate('/'); // Redirect to the home page after successful login
      } else {
        // Display error message from the simulated API response
        setError(response.message);
      }
    } catch (err) {
      // Catch any network or unexpected errors during the API call
      setError('An unexpected error occurred. Please try again.');
      console.error('Login API error:', err);
    }
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {/* Display error message if present */}
        {error && <p className="error-message">{error}</p>}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // HTML5 validation for required field
            aria-label="Email address"
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
            required // HTML5 validation for required field
            aria-label="Password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="register-link-text">
        Don't have an account? <Link to="/register" className="register-link">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;