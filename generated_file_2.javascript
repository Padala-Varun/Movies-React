import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

/**
 * Custom hook to access the authentication context.
 * Provides isLoggedIn status, user data, and login/logout functions.
 * @returns {object} The authentication context value.
 */
export const useAuthContext = () => useContext(AuthContext);

/**
 * Provider component for the authentication context.
 * Manages the global authentication state and provides login/logout functionality.
 * Persists authentication state to localStorage.
 * @param {object} { children } - React children to be rendered within the provider.
 */
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // Stores user data, e.g., { username: 'testuser' }

  // Effect to load authentication state from localStorage on initial render
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      try {
        const { isLoggedIn: storedIsLoggedIn, user: storedUser } = JSON.parse(storedAuth);
        setIsLoggedIn(storedIsLoggedIn);
        setUser(storedUser);
      } catch (error) {
        console.error("Failed to parse stored authentication data:", error);
        // Clear invalid storage to prevent future errors
        localStorage.removeItem("auth");
      }
    }
  }, []);

  // Effect to save authentication state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify({ isLoggedIn, user }));
  }, [isLoggedIn, user]);

  /**
   * Simulates a login process.
   * In a real application, this would typically involve an API call to a backend
   * to validate credentials and receive a token/user data.
   * For this client-side example, any non-empty username/password will succeed.
   * @param {string} username - The username provided by the user.
   * @param {string} password - The password provided by the user.
   * @returns {Promise<boolean>} - True if login is successful, false otherwise.
   */
  const login = async (username, password) => {
    // Basic client-side validation/simulation
    if (username && password) {
      // Simulate successful login
      setIsLoggedIn(true);
      setUser({ username }); // Store minimal user data
      return true;
    }
    // Simulate failed login
    setIsLoggedIn(false);
    setUser(null);
    return false;
  };

  /**
   * Logs out the current user by clearing the authentication state.
   */
  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // The value provided to consumers of this context
  const value = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};