// App.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { LoginForm, LogoutLink } from '../components/Auth';
import AdminPage1 from '../pages/3AdminPage1'


const Mac = () => {

  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <LogoutLink /> : <LoginForm />}
      {user && <AdminPage1 />}
    </div>
  );
};

export default Mac;
