// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
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
           {/* Link to another page */}
        
        <Link to="./Loading" className='Link'><button>Loading</button></Link> 
        <Link to="./Mac" className='Link'><button>Mac</button></Link>
        <Link to="./AdminPage1" className='Link'><button>AdminPage1</button></Link>
        <Link to="./AdminPage2" className='Link'><button>AdminPage2</button></Link> 
        <Link to="./AdminPage3" className='Link'><button>AdminPage3</button></Link>
        <Link to="./OperatorPage1" className='Link'><button>OperatorPage1</button></Link>
        <Link to="./OperatorPage2" className='Link'><button>OperatorPage2</button></Link> 
        <Link to="./OperatorPage3" className='Link'><button>OperatorPage3</button></Link>
        
      </div>

      <footer className="footer">
        <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
     
      </footer>
    </div>
  );
};

export default Loading;
