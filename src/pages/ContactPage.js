import React from 'react';
import { useState } from 'react';
import database from '../firebase';
import { Link } from 'react-router-dom';
import centerImage from '../image/2nd.png';
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

  const columnStyle = {
    flex: 1,
    padding: '20px',
    boxSizing: 'border-box', // Include padding in the column size
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const imageContainerStyle = {
    margin: 'center', // Adjust the margin around the image
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items horizontally
    justifyContent: 'center', // Center align items vertically
    minHeight: '100vh',
  };

  const pageStyle = {
    background: 'white',
  };

  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      <div className="App" style={{ marginTop: 50, display: 'flex' }}>
        {/* First Column - Image */}
        <div style={imageContainerStyle}>
          <img src={centerImage} alt="Centered Image" />
        </div>

        {/* Second Column - Form */}
        <div style={columnStyle}>
          <center>
            <input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <br />
            <button onClick={Push}>PUSH</button>
          </center>
        </div>
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
