import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import centerImage from '../../image/2nd.png';
import centerImage2 from '../../image/Gen Xgenx.png';
import {spacedTextStyle,footerTextStyle1,footerTextStyle2,pageStyle,imageContainerStyle,column2WrapperStyle1,column2WrapperStyle2,centerImageS,imageContainerStyle2,column2Style,inputLineStyle} from './Auth.jsx';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

 
  return (
    <div style={pageStyle}>
      <header className="header"></header>

      <div style={imageContainerStyle}>
        <div style={imageContainerStyle2}>
        <div className='Column2Wrapper' style={column2WrapperStyle1}>
            <img src={centerImage} alt="Centered Image" style={centerImageS} />
          </div>
          <div className='Column2Wrapper' style={column2WrapperStyle2}>
            <div className='Column2' style={column2Style}>
              <center>
                <div style={{ marginTop: '20px' }}>
                  <img src={centerImage2} alt="Centered2 Image" style={{ width: '151px', height: 'auto' }} />
                </div>
                <form onSubmit={handleLogin}>
                  <p style={{ color: 'rgba(80, 104, 143, 1)', textAlign: 'left' }}>User Name</p>
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputLineStyle} /><br /><br />
                  <p style={{ color: 'rgba(80, 104, 143, 1)', textAlign: 'left' }}>Password</p>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputLineStyle} /><br /><br />
                  <button type="submit" style={{ background: 'rgba(54, 72, 107, 1)', borderRadius: '6px', width: '25%', height: '47px', color: 'white' }}>Login</button>
                  <p style={{ color: 'rgba(80, 104, 143, 1)', }}><u>Forget Password</u></p>
                  {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                </form>
              </center>
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

const LogoutLink = () => {
  const handleLogout = async () => {
    await auth.signOut();
  };

};

export { LoginForm, LogoutLink };
