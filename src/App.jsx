import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'; // Assuming you have an About component
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> {/* Ensure you have an About route */}
          <Route exact path="/contact" element={<Contact />} />
          {/* Removed Project and ProjectGallery Routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
