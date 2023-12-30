// src/components/HomePage.js
import React from 'react';
import centerImage2 from '../image/Gen Xgenx.png';
import icon from '../image/icons8-user-100 1.png';
import '../components/HomePage.css'; // Import your custom CSS file
import '../components/Homepage.jsx';
import { pageStyle, spacedTextStyle, imageContainerStyle } from '../components/Homepage.jsx';
import { auth } from '../firebase';
import admin from '../image/Admin.png';


  const LogoutLink = () => {
    const handleLogout = async () => {
      await auth.signOut();
    };


    const column2WrapperStyle = {
      boxShadow: '5px 5px 10px rgba(210, 76, 92, 1)', // Adjusted shadow color and opacity
      width: '400px', // Width of the wrapper
      margin: '0 120px', // Adjust margin as needed
      padding: '20px',
      boxSizing: 'border-box',
      height:'480px',
      
      
    };
  
    return (
      <div style={pageStyle}>
        <header className="header">
          {/* You can add navigation links here if needed */}
        </header>
        <div style={{ marginTop: '86px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img src={centerImage2} alt="Centered2 Image" style={{ height: '60px' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={icon} alt="Icon" style={{ width: '60px', height: '60px', marginLeft: '10px' }} />
            <button onClick={handleLogout} style={{ width: '150px', height: '60px', marginLeft: '10px', marginTop: '0', color: 'white', background: 'rgba(145, 186, 248, 1)', borderRadius: '20px' }}>Log Off</button>
          </div>
        </div>
        <div style={imageContainerStyle}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='Column2Wrapper' style={column2WrapperStyle}>
              <div className='Column1' style={{  border: '100px',marginTop:'100px',marginLeft:'125px' }}>
                AdminPage1
                <img src={admin} style={{}}></img>
              </div>
            </div>
            <div className='Column2Wrapper' style={column2WrapperStyle}>
              <div className='Column2'>
                AdminPage2
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
          <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
          {/* Link to another page */}
        </footer>
      </div>
    );
  };
export default LogoutLink;
