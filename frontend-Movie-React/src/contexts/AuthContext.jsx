import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("movieAppUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate authentication (in production, this would call an API)
    // For demo, accept any email/password with valid format
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    
    // Create user object (simulated login)
    const userData = {
      id: Date.now(),
      email: email,
      name: email.split("@")[0],
      createdAt: new Date().toISOString()
    };
    
    setUser(userData);
    localStorage.setItem("movieAppUser", JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("movieAppUser");
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
