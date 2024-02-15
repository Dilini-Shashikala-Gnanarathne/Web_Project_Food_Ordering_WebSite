import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import centerImage from '../../image/GenX.png'; 
import { pageStyle, spacedTextStyle, footerTextStyle1,footerTextStyle2,imageContainerStyle } from './Loding.jsx';
const Loading = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/Mac'); 
      }, 5000); 
  
      return () => clearTimeout(timer); 
    }, [navigate]);


  return (
    <div style={pageStyle}>
      <header className="header">
      </header>

      <div style={imageContainerStyle}>
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
