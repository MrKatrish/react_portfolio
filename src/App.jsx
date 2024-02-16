import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectGallery';
import Contact from './components/Contact';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" component={ProjectGallery} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
