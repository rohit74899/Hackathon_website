import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Navbar2 from './components/Navbar2';
import Dashboard from './components/Dashboard';
import Navbar3 from './components/Navbar3';



function App() {

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/Dashboard', label: 'Dashboard' },
    
  ];

  return (
    <Router>
      <>
        <Navbar3 routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
        </Routes>
      </>
    </Router>
     
  );
}

export default App;
