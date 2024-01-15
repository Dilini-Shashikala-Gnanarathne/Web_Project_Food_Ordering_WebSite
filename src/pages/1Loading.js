// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import centerImage from '../image/dili.png'; // Import your image
import '../components/HomePage.css'; // Import your custom CSS file
import '../components/Homepage.jsx';

import { pageStyle, spacedTextStyle, footerTextStyle1,footerTextStyle2,imageContainerStyle } from '../components/Homepage.jsx';

const Loading = () => {
  // Define your styles here

  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      <div style={imageContainerStyle}>
      <Link to="./Mac" className='Link'>
        <img src={centerImage} alt="Centered Image" /></Link>
      </div>

      <footer className="footer">
      <p style={{ ...spacedTextStyle, ...footerTextStyle1 }}>GENERATOR X INDUSTRIES</p>
      <p style={{ ...footerTextStyle2 }}>Copyright © 2023 All rights reserved by AD Printers</p>  
      </footer>
    </div>
  );
};

export default Loading;
