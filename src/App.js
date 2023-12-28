// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './pages/1Loading';
import Mac from './pages/2Mac';
import AdminPage1 from './pages/3AdminPage1';
import AdminPage2 from './pages/4AdminPage2';
import AdminPage3 from './pages/5AdminPage3';
import OperatorPage1 from './pages/6OperatorPage1';
import OperatorPage2 from './pages/7OperatorPage2';
import OperatorPage3 from './pages/8OperatorPage3';
import Check from './pages/0CheckPages';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Check />} />
          <Route path="/Loading" element={<Loading />} />
		      <Route path="/Mac" element={<Mac />} />
          <Route path="/AdminPage1" element={<AdminPage1 />} />     
          <Route path="/AdminPage2" element={<AdminPage2 />} />
          <Route path="/AdminPage3" element={<AdminPage3 />} />
		      <Route path="/OperatorPage1" element={<OperatorPage1 />} />
          <Route path="/OperatorPage2" element={<OperatorPage2 />} />     
          <Route path="/OperatorPage3" element={<OperatorPage3 />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
