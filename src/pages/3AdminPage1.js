// src/components/HomePage.js
import React from 'react';
import centerImage2 from '../image/Gen Xgenx.png';
import icon from '../image/icons8-user-100 1.png';
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
      <div style={{ marginTop: '86px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={centerImage2} alt="Centered2 Image" style={{ height: '60px' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} alt="Icon" style={{ width: '60px', height: '60px', marginLeft: '10px' }} />
          <button style={{ width: '150px', height: '60px', marginLeft: '10px', marginTop: '0' ,color:'white',background:'rgba(145, 186, 248, 1)' , borderRadius:'20px'}}>Log Off</button>
        </div>
      </div>
      <div style={imageContainerStyle}>
      <div>
      <div style={{ display: 'flex' }}>
        <div className='Column1' style={{background:'red', border:'100px'}}>
          AdminPage1
        </div>
        <div className='Column2'>
          AdminPage2
        </div>
      </div></div>
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
