import React from 'react';
import { Button } from 'react-bootstrap'; // Importujemy Button z react-bootstrap

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Welcome to Your Portfolio Site</h1>
          <p>Your brand statement goes here.</p>
          <p>This is where you showcase your skills and projects.</p>
          <p>
            <Button variant="primary" href="/projects">View Projects</Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
