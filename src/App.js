import React from 'react';
import './App.css';
import Navbar from './components/Navbar'

// Contents
import Home from './contents/Home'
import Bisections from './contents/Bisections'



import { BrowserRouter as Router, Route } from 'react-router-dom'
import Falseposition from './contents/False-position';
import Onepoint from './contents/Onepoint';
import Newtonrap from './contents/Newton-raphson';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bisection">
          <Bisections />
        </Route>
        <Route exact path="/false">
          <Falseposition />
        </Route>
        <Route exact path="/onepoint">
          <Onepoint />
        </Route>
        <Route exact path="/Newtonrap">
          <Newtonrap />
        </Route>

      </div>
    </Router>
  );
}

export default App;
