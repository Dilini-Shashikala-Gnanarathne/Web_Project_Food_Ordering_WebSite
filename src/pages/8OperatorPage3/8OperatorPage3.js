import React from 'react';
import { auth } from '../../firebase';
import gen_X from '../../image/Gen Xgenx.png';
import icon from '../../image/icons8-user-100 1.png';
import './OperatorPage3.css'; 

const OperatorPage3 = () => {
  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = '/Mac';
  };

  return (
    <div className="pageStyle"> 
    <header>
        <h1>Your Website Header</h1>
    </header>

    <main>
        <p>This is the main content of your web page.</p>
    </main>

    <footer>
        <p>&copy; 2024 Your Websit
          e. All rights reserved.</p>
    </footer>

    </div>
  );
};

export default OperatorPage3;
