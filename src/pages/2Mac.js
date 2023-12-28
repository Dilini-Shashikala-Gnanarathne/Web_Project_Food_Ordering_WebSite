import React from 'react';
import { useState } from 'react';
import database from '../firebase';
import { Link } from 'react-router-dom';
import centerImage from '../image/2nd.png';
import centerImage2 from '../image/Gen Xgenx.png';

import '../components/HomePage.css';

const HomePage = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const Push = () => {
    database.ref('user').set({
      name: name,
      age: age,
    }).catch(alert);
  };
  const imageContainerStyle = {
    margin: 'center',
    display: 'flex',
    flexDirection: 'row',  // Change this to 'row'
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    
  };
 
  const pageStyle = {
    background: 'white',
  };
   const columnsContainerStyle = {
    display: 'flex',
    width: '100%',
  };
  const inputLineStyle = {
    borderBottom: '1px solid black', // You can adjust the style of the line
    margin: '10px', // Adjust spacing as needed
    padding: '5px', // Adjust padding as needed
    width: '75%', // Ensures the line spans the entire width of the column
    borderLeft: 'none', // No left border
    borderRight: 'none', // No right border
    borderTop: 'none', 
  };
  
   const columnStyle = {
    flex: 1,
  };
  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      
      <div style={columnsContainerStyle}>
        {/* Left Column */}
        <div style={columnStyle}>
        <div style={imageContainerStyle}>
          <img src={centerImage} alt="Centered Image" style={{ width: '100', height: '100'}}/>
        </div>
        </div>

        {/* Right Column */}
        <div style={columnStyle}>
        <center >
        <div style={{marginTop:'100px'}}>
          <img src={centerImage2} alt="Centered2 Image" />
        </div>

        <p >User Name</p>
          <input style={inputLineStyle}   
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         
          <br />
          <br />
          <p>Password</p>
          <input
           style={inputLineStyle} 
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <button onClick={Push} style={{background:'rgba(54, 72, 107, 1)', borderRadius:'6px', width:'100px',color:'white'}}>Log In</button>
        </center>        </div>
      </div>















      <footer className="footer">
        <p style={{ fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
        <Link to="./contact">Go to Another Page</Link> <Link to="./macbook">Go to Another Page</Link>
      </footer>
    </div>
  );
};

export default HomePage;


