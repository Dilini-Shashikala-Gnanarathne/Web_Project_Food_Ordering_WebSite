// src/components/HomePage.js
import React from 'react';
import '../components/HomePage.css'; // Import your custom CSS file
import '../components/Homepage.jsx';
import { pageStyle, spacedTextStyle, imageContainerStyle } from '../components/Homepage.jsx';

const Loading = () => {
  // Define your styles here

  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      <div style={imageContainerStyle}>
       Operator Page3
     </div>

      <footer className="footer">
        <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
        {/* Link to another page */}        
      </footer>
    </div>
  );
};

export default Loading;
