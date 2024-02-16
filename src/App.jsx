import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Project from './components/Project';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={ProjectGallery} />
          <Route exact path="/projects/:id" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
