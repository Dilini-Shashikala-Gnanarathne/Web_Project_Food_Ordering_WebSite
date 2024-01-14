// src/components/AdminPage2.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import firebase, { auth, database } from '../firebase'; // Adjust the path based on your project structure
const AdminPage3 = () => {
  const [formData, setFormData] = useState({});
  const [formVisibility, setFormVisibility] = useState(false);
  const [formArray, setFormArray] = useState([]);

  const location = useLocation();
  const formDataFromURL = location.search
    ? Object.fromEntries(new URLSearchParams(location.search))
    : {};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormArray((prevArray) => [...prevArray, formData]);
    setFormData({});
    setFormVisibility(false);
  };
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   const newData = { ...formData };

  //   // Push data to Firebase Realtime Database
  //   database.ref('formData').push(newData);

  //   setFormArray((prevArray) => [...prevArray, newData]);
  //   setFormData({});
  //   setFormVisibility(false);
  // };
  const toggleFormVisibility = () => {
    setFormVisibility((prevVisibility) => !prevVisibility);
  };

  const pageStyle = {
    // Your page styles here
  };

  const imageContainerStyle = {
    // Your image container styles here
  };

  const buttonIconStyle = {
    padding: '20px',
    color: 'white',
    background: 'rgba(6, 43, 99, 1)',
    borderRadius: '10px',
    width: '100%',
    marginTop: 'auto', // Push the button to the center vertically
  };

  return (
    <div style={pageStyle}>
      <header className="header">
        {/* You can add navigation links here if needed */}
      </header>

      {formVisibility ? (
        <div style={{ marginTop: '100px' }}>
          <form
            style={{
              margin: 'auto',
              padding: '15px',
              maxWidth: '400px',
              alignContent: 'center',
            }}
            id="FormInput"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name........"
              value={formData.name || ''}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email........"
              value={formData.email || ''}
              onChange={handleInputChange}
            />
            <label htmlFor="contact">Contact</label>
            <input
              type="number"
              id="contact"
              name="contact"
              placeholder="Your Contact Number........"
              value={formData.contact || ''}
              onChange={handleInputChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )  : (
        <div style={imageContainerStyle}>
          AdminPage2Dilinigggggggggggggggggggg
          <button style={buttonIconStyle} onClick={toggleFormVisibility}>
            Generator Management
          </button>

          {formArray.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <h2>Form Data Table:</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {formArray.map((data, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p style={{ fontSize: '30px', textAlign: 'center' }}>GENERATOR X INDUSTRIES</p>
        <p style={{ fontSize: '15px', textAlign: 'center' }}>Copyright © 2023 All rights reserved by AD Printers</p>
      </footer>
    </div>
  );
};

export default AdminPage3;
