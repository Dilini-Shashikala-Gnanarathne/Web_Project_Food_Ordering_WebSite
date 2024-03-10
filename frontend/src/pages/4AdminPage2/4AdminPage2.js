import React, { useState } from 'react';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.js';
import './AdminPage2.css';
import gen_X from '../../image/Gen Xgenx.png';
import icon from '../../image/icons8-user-100 1.png';

const AdminPage2 = () => {
  const [formData, setFormData] = useState({});
  const [formVisibility, setFormVisibility] = useState(false);
  const [formArray, setFormArray] = useState([]);

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
    <div className="pageStyle">
      <header className="header"></header>
      <div className="A_P_3_images">
        <img src={gen_X} alt="gen_x Image" className='gen_X' />
        <div className="A_P_3_logout">
          <img src={icon} alt="Icon" className="A_P_3_icon1" />
          <button onClick={handleLogout} className="A_P_3_icon2">
            Log Off
          </button>
        </div>
      </div>

      {formVisibility ? (
         <div style={{ marginTop: '100px' }}>
         <form
           className="formVisibility_form"
           id="FormInput"
           onSubmit={handleFormSubmit}
         >
           <p className='userdetails'>Generator Details Sheet</p>
           <br/>
           <label htmlFor="User_ID" className='userid'>Generator ID</label>
           <br/>
           <input
             type="text"
             id="User_ID"
             name="User_ID"
             placeholder="Enter Generator ID"
             value={formData.User_ID || ''}
             onChange={handleInputChange}
           />
           <br/>
           <label htmlFor="User_Name" className='username'>Location </label>
           <br/>
           <input
             type="text"
             id="User_Name"
             name="User_Name"
             placeholder="Enter Location"
             value={formData.User_Name || ''}
             onChange={handleInputChange}
           />
           <br/>  <label htmlFor="Description" className='username'>Description </label>
           <br/>
           <input
             type="text"
             id="User_Name"
             name="User_Name"
             placeholder="Description"
             value={formData.User_Name || ''}
             onChange={handleInputChange}
           />
           <br/>  
           <label htmlFor="User_Name" className='username'>Actions </label>
           <br/>
           <input
             type="text"
             id="User_Name"
             name="User_Name"
             placeholder="Actions"
             value={formData.User_Name || ''}
             onChange={handleInputChange}
           />
           <br/> 
           <input className='submit' type="submit" value="Submit" />
         </form></div>
      ) : (
        <div className="imageContainerStyle">
          <button className="buttonIconStyle1" onClick={toggleFormVisibility}>
            Add a Generator <FaPlusCircle className="faPlusCircle" />
          </button>
          <input
            type="text"
            className="buttonIconStyle2"
            placeholder="Search Generator"
            onChange={handleInputChange}
          />
          <FaSearch className="buttonIconStylei" />
          {formArray.length > -1 && (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th className="table_header">Generator ID</th>
                    <th className="table_header">Location</th>
                    <th className="table_header">Description</th>
                    <th className="table_header">Make</th>
                    <th className="table_header">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formArray.map((data, index) => (
                    <tr key={index} style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.25)' }}>
                      <td className="table_data">{data.ID}</td>
                      <td className="table_data">{data.Location}</td>
                      <td className="table_data">{data.Description}</td>
                      <td className="table_data">{data.Make}</td>
                      <td className="table_data">{data.Actions}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="table_footer">
                <tr style={{ textAlign: 'center', fontWeight: 'bold' }}>
                  &lt; 1,2,3,4 &gt;
                </tr>
                </tfoot>
              </table>
              <div>
                <p className="p_footer">
                  <a href="/AdminPage1" style={{ textDecoration: 'none', color:'black' }}>
                    &lt; Back
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="footer">
        <p className="spacedTextStyle footerTextStyle1">GENERATOR X INDUSTRIES</p>
        <p className="footerTextStyle2">Copyright © 2023 All rights reserved by AD Printers</p>
      </footer>
    </div>
  );
};

export default AdminPage2;
