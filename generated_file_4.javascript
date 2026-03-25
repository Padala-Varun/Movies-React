// frontend-Movie-React/src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext'; // Assuming this exists
import Navbar from './components/Navbar';
import Home from './pages/Home';
// Import the new Login and Logout components
import Login from './pages/Login';
import Logout from './pages/Logout';
import Favorites from './pages/Favorites'; // Assuming you have a Favorites page

import './App.css'; // Your global app styles

function App() {
  return (
    <Router>
      <MovieProvider> {/* Wrap your app with MovieContext */}
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            {/* Add the new Login route */}
            <Route path="/login" element={<Login />} />
            {/* Add the new Logout route */}
            <Route path="/logout" element={<Logout />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </MovieProvider>
    </Router>
  );
}

export default App;