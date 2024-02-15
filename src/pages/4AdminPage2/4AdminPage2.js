// src/components/AdminPage2.js
import React, { useState } from 'react';
import { useLocation, useNavigate, navigate } from 'react-router-dom';
import '../../components/HomePage.css';
import gen_X from '../../image/Gen Xgenx.png';
import { auth } from '../../firebase.js';
import icon from '../../image/icons8-user-100 1.png';
import {  spacedTextStyle,A_P_3_images,A_P_3_logout,A_P_3_icon1,
  A_P_3_icon2, buttonIconStyle1,buttonIconStyle2,buttonIconStylei,table_data,table_header,table_footer,
  table,footerTextStyle1,footerTextStyle2,pageStyle,imageContainerStyle,faPlusCircle
  ,formVisibility_form,p_footer,} from './AdminPage2.jsx';
import { FaPlusCircle, FaSearch } from 'react-icons/fa'; 

const AdminPage2 = () => {
  const [formData, setFormData] = useState({});
  const [formVisibility, setFormVisibility] = useState(false);
  const [formArray, setFormArray] = useState([]);

  // const handleLogout = async () => {
  //   await auth.signOut();
  // };

    const handleLogout = async () => {
      await auth.signOut();
      window.location.href = '/Mac';
    };


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

  const toggleFormVisibility = () => {
    setFormVisibility((prevVisibility) => !prevVisibility);
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

      {formVisibility ? (
        <div style={{ marginTop: '100px' }}>
          <form
            style={{...formVisibility_form }}
            id="FormInput"
            onSubmit={handleFormSubmit}>

            <label htmlFor="ID">Generator ID</label>
            <input
              type="text"
              id="ID"
              name="ID"
              placeholder="Generator ID"
              value={formData.ID || ''}
              onChange={handleInputChange}
            />
              <label htmlFor="LoactionF">Loaction</label>
            <input
              type="text"
              id="LoactionF"
              name="LoactionF"
              placeholder="Loaction"
              value={formData.LoactionF || ''}
              onChange={handleInputChange}
            />
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              id="Description"
              name="Description"
              placeholder="Description"
              value={formData.Description || ''}
              onChange={handleInputChange}
            />
             <label htmlFor="Make">Make</label>
            <input
              type="text"
              id="Make"
              name="Make"
              placeholder="Make"
              value={formData.Make || ''}
              onChange={handleInputChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )  : (
        <div style={imageContainerStyle}>
          <button style={{...buttonIconStyle1}} onClick={toggleFormVisibility}>
          Add a Generator <FaPlusCircle style={{...faPlusCircle  }} />
          </button>
          <input
            type="text"
            style={{ ...buttonIconStyle2 }}
            placeholder="Search Generator"
            onChange={handleInputChange}
          />
         <FaSearch style={{ ...buttonIconStylei }} />
          {formArray.length > -1 && (
              <div>
              <table style={{ ...table }}>
              <thead>
                <tr>
                  <th style={{ ...table_header }}>Generator ID</th>
                  <th style={{ ...table_header }}>Location</th>
                  <th style={{ ...table_header }}>Description</th>
                  <th style={{ ...table_header }}>Make</th>
                  <th style={{ ...table_header }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formArray.map((data, index) => (
                  <tr key={index} style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.25)' }}>
                    <td style={{ ...table_data }}>{data.ID}</td>
                    <td style={{ ...table_data }}>{data.LoactionF}</td>
                    <td style={{ ...table_data }}>{data.Description}</td>
                    <td style={{ ...table_data }}>{data.Make}</td>
                    <td style={{ ...table_data }}>{data.Actions}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot style={{ ...table_footer }}>
                <tr style={{ textAlign: 'center' }}>
                  &lt; 1,2,3,4 &gt;
                </tr>
              </tfoot>
            </table>
            <div>
            <p style={{ ...p_footer }}>
              <a href="/AdminPage1" style={{ textDecoration: 'none' }}>
                &lt; Back
              </a>
            </p>
            </div>
            </div>)}
            </div>)}
            
      <footer className="footer">
      <p style={{ ...spacedTextStyle, ...footerTextStyle1 }}>GENERATOR X INDUSTRIES</p>
      <p style={{ ...footerTextStyle2 }}>Copyright © 2023 All rights reserved by AD Printers</p>  
      </footer>
    </div>
  );
};

export default AdminPage2;
