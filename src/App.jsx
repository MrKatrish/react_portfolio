import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Project from './components/Project';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Dodajemy element prop do Route */}
          <Route exact path="/projects" element={<ProjectGallery />} /> {/* Dodajemy element prop do Route */}
          <Route exact path="/projects/:id" element={<Project />} /> {/* Dodajemy element prop do Route */}
          <Route exact path="/contact" element={<Contact />} /> {/* Dodajemy element prop do Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
