// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import gen_X from '../../image/Gen Xgenx.png';
import icon from '../../image/icons8-user-100 1.png';
import '../../components/HomePage.css';
import { pageStyle, spacedTextStyle, imageContainerStyle,
  adminIcon,addminP,buttonIcon,column2WrapperStyle
  ,A_P_3_images,A_P_3_logout,A_P_3_icon1,A_P_3_icon2,
  Column2WrapperRow,footerTextStyle1,footerTextStyle2
} from './AdminPage1.jsx';
import { auth } from '../../firebase.js';
import admin from '../../image/Admin.png';

const LogoutLink = () => {
  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div style={pageStyle}>
      <header className="header"></header>

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
        <div style={{...Column2WrapperRow  }}>
          <div className='Column2Wrapper' style={column2WrapperStyle}>
            <img src={admin} style={adminIcon} alt="Admin Image" />
            <p style={addminP}>
              Click here for all operators related <br/>operations
            </p>
            <Link to="/AdminPage3">
              <button style={buttonIcon}>Operator Management</button>
            </Link>
          </div>
          <div className='Column2Wrapper' style={column2WrapperStyle}>
            <img src={admin} style={adminIcon} alt="Admin Image" />
            <p style={addminP}>Click here for all generator related <br/>operations</p>
            <Link to="/AdminPage2">
              <button style={buttonIcon}>Generator Management</button>
            </Link>
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

export default LogoutLink;
