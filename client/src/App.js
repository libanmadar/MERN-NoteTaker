import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
       </div> 
    </Router>
  );
} 

export default App;
