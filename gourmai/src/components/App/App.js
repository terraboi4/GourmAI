import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router';
import Dashboard from '../Dashboard/Dashboard.js';
import Preferences from '../Preferences/Preferences.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/preferences" element={<Preferences/>}/>
          </Routes>
        </BrowserRouter>
    </div>
 
    
  );
}

export default App;