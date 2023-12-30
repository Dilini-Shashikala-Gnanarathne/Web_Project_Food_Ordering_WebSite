// Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase';

import centerImage from '../image/2nd.png';
import centerImage2 from '../image/Gen Xgenx.png';

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

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const pageStyle = {
    background: 'white',
  };

  const column1Style = {
    flex: '1', // Take up remaining space
    padding: '20px',
    boxSizing: 'border-box',

  };

  const column2WrapperStyle = {
    boxShadow: '5px 5px 10px rgba(13, 15, 20, 0.1)', // Adjusted shadow color and opacity
    width: '40%', // Width of the wrapper
    margin: '0 20px', // Adjust margin as needed
  };

  const column2Style = {
    padding: '20px',
    boxSizing: 'border-box',
  };

  const inputLineStyle = {
    borderBottom: '1px solid black',
    margin: '10px',
    padding: '5px',
    width: '100%', // Adjusted to full width
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
  };

  return (
    <div style={pageStyle}>
      <header className="header">{/* You can add navigation links here if needed */}</header>

      <div style={imageContainerStyle}>
        <div style={{ display: 'flex', width: '80%' }}>



          {/* Column1 with image */}
          <div className='Column1' style={column1Style}>
            <img src={centerImage} alt="Centered Image" style={{ width: '100%', height: '100%' }} />
          </div>



          {/* Wrapper around Column2 with red shadow */}
          <div className='Column2Wrapper' style={column2WrapperStyle}>
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
        <p style={{ fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
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
