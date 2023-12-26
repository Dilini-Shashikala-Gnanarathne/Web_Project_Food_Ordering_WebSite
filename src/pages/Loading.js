// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import centerImage from '../image/dili.png'; // Import your image
import '../components/HomePage.css'; // Import your custom CSS file


const HomePage = () => {
  const pageStyle = {
    background: 'white', // Set the background color of the page to red
  };

 
  const spacedTextStyle = {
    letterSpacing: '25px', // Set the spacing between letters
  };

  const imageContainerStyle = {
    margin: 'center', // Adjust the margin around the image
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'center', // Center align items vertically
    minHeight: '100vh',
  };

  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      <div style={imageContainerStyle}>
        <img src={centerImage} alt="Centered Image" />
      </div>

      <footer className="footer">
        <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
        {/* Link to another page */}
        <Link to="./contact">Go to Another Page</Link> <Link to="./macbook">Go to Another Page</Link>
      </footer>
    </div>
  );
};

export default HomePage;
