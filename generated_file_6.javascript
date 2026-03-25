// frontend-Movie-React/src/contexts/AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token/session on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token with backend or decode if JWT
      // For now, just assume it's valid
      setIsAuthenticated(true);
      setUser({ email: 'user@example.com' }); // Placeholder user info
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Call API to authenticate
    // If successful:
    // const token = response.data.token;
    // localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
    setUser({ email });
    return true; // Indicate success
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Render children only after auth state is loaded */}
    </AuthContext.Provider>
  );
};