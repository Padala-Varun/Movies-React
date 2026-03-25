import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'; // Import the new CSS file

/**
 * Login component for user authentication.
 * Provides a form for users to enter their email and password.
 * Upon successful login (simulated), redirects to the home page.
 */
const Login = () => {
  // State to manage email and password input fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State to manage any login error messages
  const [error, setError] = useState('');
  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles the form submission for login.
   * Prevents default form behavior, performs basic validation,
   * and simulates an authentication process.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setError(''); // Clear previous errors

    // Basic client-side validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // --- Placeholder for actual authentication logic ---
    // In a real application, you would make an API call here
    // to your backend authentication endpoint.
    try {
      // Example: const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // const data = await response.json();

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate successful login
      console.log('Attempting login with:', { email, password });
      // If login is successful, you would typically receive a token
      // and update an AuthContext or global state.
      // For now, we'll just redirect.
      console.log('Login successful! Redirecting to home...');
      navigate('/'); // Redirect to the home page after successful login

    } catch (err) {
      // Handle login errors (e.g., network issues, invalid credentials)
      setError('Login failed. Please check your credentials and try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="login-error">{error}</p>} {/* Display error message if any */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
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
            aria-label="Password"
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;