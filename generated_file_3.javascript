// frontend-Movie-React/src/App.jsx

import { useState } from 'react'; // Assuming you might need state for user login status
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assuming you have a Home component
import Login from './pages/Login'; // Import the new Login component
// import Register from './pages/Register'; // You would import a Register component here

function App() {
  // Example state for user authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    // In a real app, you'd store a token or user info in local storage/context
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail(null);
    // Clear any stored tokens/user info
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} /> {/* Pass login status to Navbar */}
      <div className="container"> {/* Assuming a main container for content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Add the Login route */}
          {/* Add a route for registration if you create a Register component */}
          {/* <Route path="/register" element={<Register />} /> */}
          {/* Add other routes like Favorites, MovieDetails, etc. */}
        </Routes>
      </div>
    </>
  );
}

export default App;