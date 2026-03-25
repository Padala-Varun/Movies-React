import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Logout component.
 * This component handles the logout process by clearing user session data
 * and redirecting the user to the login page or home page.
 * It's designed to be visited as a route to trigger the logout action.
 */
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * Performs the logout action.
     * In a real application, this would involve:
     * 1. Clearing any authentication tokens (e.g., from localStorage, sessionStorage, cookies).
     * 2. Updating an AuthContext or global state to reflect the logged-out status.
     * 3. Optionally, making an API call to invalidate the session on the server-side.
     */
    const performLogout = () => {
      console.log('Performing logout...');
      // --- Placeholder for actual logout logic ---
      // Example: localStorage.removeItem('authToken');
      // Example: authContext.logoutUser(); // If using an AuthContext

      // Simulate logout process
      setTimeout(() => {
        console.log('Logout successful! Redirecting to login...');
        navigate('/login'); // Redirect to the login page after logout
        // Or navigate('/') if you want to go to home page
      }, 500);
    };

    performLogout();
  }, [navigate]); // Dependency array ensures effect runs only once on mount

  // The component doesn't render any visible UI as it's purely for side effects (logout)
  return (
    <div className="logout-message">
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;