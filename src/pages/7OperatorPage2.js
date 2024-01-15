// src/components/HomePage.js
import React from 'react';
import '../components/HomePage.css'; // Import your custom CSS file
import '../components/Homepage.jsx';
import { auth } from '../firebase';
import gen_X from '../image/Gen Xgenx.png';
import icon from '../image/icons8-user-100 1.png';
import { pageStyle, spacedTextStyle, imageContainerStyle,A_P_3_images,A_P_3_logout,A_P_3_icon1,A_P_3_icon2 } from '../components/Homepage.jsx';

const OperatorPage2 = () => {
  // Define your styles here
  const handleLogout = async () => {
    await auth.signOut();
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
       Operator Page2_ DashBord
     </div>

      <footer className="footer">
        <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
        {/* Link to another page */}        
      </footer>
    </div>
  );
};

export default OperatorPage2;
