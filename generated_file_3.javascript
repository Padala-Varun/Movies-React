// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'; // Import the new LoginPage component
// import Favorites from './pages/Favorites'; // Assuming you have a Favorites page
// import MovieDetails from './pages/MovieDetails'; // Assuming you have a MovieDetails page

function App() {
  return (
    <>
      <Navbar /> {/* Navbar is typically outside the Routes to be present on all pages */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add the new login route */}
          {/* Add other routes here, e.g.: */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> // Placeholder for a register page */}
        </Routes>
      </main>
    </>
  );
}

export default App;