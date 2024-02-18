import React from 'react';
import { Button } from 'react-bootstrap';
import { Element } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Element name="home" className="home-section">
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="mt-5">Welcome to Your Portfolio Site</h1>
          <p className="lead">Your brand statement goes here.</p>
          <p>This is where you showcase your skills and projects.</p>
        </div>
      </div>
    </div>
    </Element>
  );
}

export default Home;
