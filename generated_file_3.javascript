    // frontend-Movie-React/src/App.jsx
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './pages/Home';
    import Favorites from './pages/Favorites'; // Assuming you have this
    import LoginPage from './pages/LoginPage'; // <--- Import the new component

    function App() {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<LoginPage />} /> {/* <--- Add this route */}
            {/* You might also want a /register route */}
            <Route path="/register" element={<div>Register Page Placeholder</div>} />
          </Routes>
        </div>
      );
    }

    export default App;