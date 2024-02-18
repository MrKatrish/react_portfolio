import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainLayout = () => (
  <>
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
