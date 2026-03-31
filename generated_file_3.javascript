import "./css/App.css";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage"; // <--- ADD THIS IMPORT
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<LoginPage />} /> {/* <--- ADD THIS ROUTE */}
          {/* You might also want a /register route here if you create a registration page */}
          <Route path="/register" element={<div>Registration Page Placeholder</div>} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;