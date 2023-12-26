// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Loading';
import MacBook from './pages/MacBook';

import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
		  <Route path="/maxbook" element={<MacBook />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
