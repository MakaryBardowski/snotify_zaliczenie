import React, { useState } from 'react';
import './LoginPage.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Albums from './Albums';
import Login from './LoginPage';
import History from './History';
import Details from './Details';

function App() {
  return (
    <Router>
    <Routes>
      {/* Default route redirects to login */}
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/history" element={<History />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </Router>
  );
}

export default App;
