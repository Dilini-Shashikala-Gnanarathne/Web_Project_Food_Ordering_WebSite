// src/components/HomePage.js
import React from 'react';
import '../../components/HomePage.css'; // Import your custom CSS file
import { auth } from '../../firebase';
import gen_X from '../../image/Gen Xgenx.png';
import icon from '../../image/icons8-user-100 1.png';
import {  Link } from 'react-router-dom';

import { pageStyle, spacedTextStyle,footerTextStyle1,footerTextStyle2, imageContainerStyle,A_P_3_images,A_P_3_logout,A_P_3_icon1,A_P_3_icon2 } from './OperatorPage3.jsx';

const OperatorPage2 = () => {
  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/Mac';
  };
  return (
    <div style={pageStyle}>
      <header className="header"> </header>
      <div id='A_P_3_images'style={{ ...A_P_3_images}}>
        <img src={gen_X} alt="gen_x Image" style={{ gen_X }} />
        <div id='A_P_3_logout' style={{...A_P_3_logout}}>
          <img src={icon} alt="Icon" style={{...A_P_3_icon1}} />
          <button onClick={handleLogout}style={{...A_P_3_icon2}}>
            Log Off
          </button>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <div>
          <p>Operators</p>
          <div style={{ display: 'flex' }}>
            <div className='Column1' style={{ border: '1px solid black', padding: '10px' }}>
              AdminPage1
            </div>
            <div className='Column2' style={{ border: '1px solid black', padding: '10px' }}>
              AdminPage2

              <Link to="/OperatorPage1">
              <button >Generator 1 List</button>
            </Link>
            <Link to="/OperatorPage2">
              <button >Generator 2 List</button>
            </Link>
            <Link to="/OperatorPage3">
              <button >Generator  3 List</button>
            </Link>
            <Link to="/firebaseDemo">
              <button >Generator 2 List</button>
            </Link>
            </div>
          </div>
        </div>
      </div>


      <footer className="footer">
      <p style={{ ...spacedTextStyle, ...footerTextStyle1 }}>GENERATOR X INDUSTRIES</p>
      <p style={{ ...footerTextStyle2 }}>Copyright © 2023 All rights reserved by AD Printers</p>  
      </footer>
    </div>
  );
};

export default OperatorPage2;





