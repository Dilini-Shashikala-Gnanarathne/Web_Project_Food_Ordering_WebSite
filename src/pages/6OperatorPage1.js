// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import centerImage2 from '../image/Gen Xgenx.png';
import icon from '../image/icons8-user-100 1.png';
import '../components/HomePage.css';
import { pageStyle, spacedTextStyle, imageContainerStyle } from '../components/Homepage.jsx';
import { auth } from '../firebase';
import admin from '../image/Admin.png';

const LogoutLink = () => {
  const handleLogout = async () => {
    await auth.signOut();
  };

  const column2WrapperStyle = {
    boxShadow: '5px 5px 10px rgba(210, 76, 92, 1)',
    width: '400px',
    margin: '0 120px',
    padding: '20px',
    boxSizing: 'border-box',
    height: '480px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'center',
  };

  const buttonIcon = {
    padding: '20px',
    color: 'white',
    background: 'rgba(6, 43, 99, 1)',
    borderRadius: '10px',
    width: '100%',
    marginTop: 'auto', // Push the button to the center vertically
  };
  const adminIcon={
    marginTop:'1px',
    paddingTop:'55px',
  };
  const addminP={
    paddingTop:'20px',
    paddingBottom:'40px'
  }

  return (
    <div style={pageStyle}>
      <header className="header"></header>
      <div style={{ marginTop: '86px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={centerImage2} alt="Centered2 Image" style={{ height: '60px' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} alt="Icon" style={{ width: '60px', height: '60px', marginLeft: '10px' }} />
          <button
            onClick={handleLogout}
            style={{
              width: '150px',
              height: '60px',
              marginLeft: '10px',
              marginTop: '0',
              color: 'white',
              background: 'rgba(145, 186, 248, 1)',
              borderRadius: '20px',
            }}
          >
            Log Off
          </button>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='Column2Wrapper' style={column2WrapperStyle}>
            <img src={admin} style={adminIcon} alt="Admin Image" />
            <p style={addminP}>Click here for all generator details and previous generator reports.</p>
            <Link to="/AdminPage3">
              <button style={buttonIcon}>Generator List</button>
            </Link>
          </div>
          <div className='Column2Wrapper' style={column2WrapperStyle}>
            <img src={admin} style={adminIcon} alt="Admin Image" />
            <p style={addminP}>Click here for the generator dashboard of the selected generator.</p>
            <Link to="/AdminPage2">
              <button style={buttonIcon}>Generator Dashboard</button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p style={{ ...spacedTextStyle, fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
      </footer>
    </div>
  );
};

export default LogoutLink;
