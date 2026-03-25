import "./css/App.css";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login"; // <--- ADD THIS IMPORT
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
          <Route path="/login" element={<Login />} /> {/* <--- ADD THIS ROUTE */}
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;