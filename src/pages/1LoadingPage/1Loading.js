import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import centerImage from '../../image/GenX.png'; // Import your image
import { pageStyle, spacedTextStyle, footerTextStyle1,footerTextStyle2,imageContainerStyle } from './Loding.jsx';
const Loading = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/Mac'); // Replace '/login' with the path to your login page
      }, 5000); // 3000 milliseconds = 3 seconds
  
      return () => clearTimeout(timer); // Cleanup function to clear the timer if component unmounts
    }, [navigate]);


  return (
    <div style={pageStyle}>
      <header className="header">
      </header>

      <div style={imageContainerStyle}>
      <Link to="/OperatorPage1">
              <button >Generator 1 List</button>
            </Link>
            <Link to="/OperatorPage2">
              <button >Generator 2 List</button>
            </Link>
            <Link to="/OperatorPage3">
              <button >Generator  3 List</button>
            </Link>




        <img src={centerImage} alt="Centered Image" />
      </div>

      <footer className="footer">
      <p style={{ ...spacedTextStyle, ...footerTextStyle1 }}>GENERATOR X INDUSTRIES</p>
      <p style={{ ...footerTextStyle2 }}>Copyright © 2023 All rights reserved by AD Printers</p>  
      </footer>
    </div>
  );
};

export default Loading;
