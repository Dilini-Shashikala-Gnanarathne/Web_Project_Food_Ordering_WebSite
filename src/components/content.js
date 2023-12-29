// src/components/Content.js
import React, { useEffect, useState } from 'react';
import { auth, database } from '../firebase';

const Content = () => {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [pres, setPres] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;

        const dbPathTemp = `UsersData/${uid}/temperature`;
        const dbPathHum = `UsersData/${uid}/humidity`;
        const dbPathPres = `UsersData/${uid}/pressure`;

        const dbRefTemp = database.ref().child(dbPathTemp);
        const dbRefHum = database.ref().child(dbPathHum);
        const dbRefPres = database.ref().child(dbPathPres);

        dbRefTemp.on('value', (snapshot) => {
          setTemp(snapshot.val() !== null ? snapshot.val().toFixed(2) : null);
        });

        dbRefHum.on('value', (snapshot) => {
          setHum(snapshot.val() !== null ? snapshot.val().toFixed(2) : null);
        });

        dbRefPres.on('value', (snapshot) => {
          setPres(snapshot.val() !== null ? snapshot.val().toFixed(2) : null);
        });
      }
    };

    fetchData();

    return () => {
      // Unsubscribe from Firebase listeners on component unmount if needed
    };
  }, []);

  return (
    <div className="cards">
      <div className="card">
        <p>TEMPERATURE</p>
        <p><span className="reading">{temp !== null ? `${temp} °C` : 'N/A'}</span></p>
      </div>
      <div className="card">
        <p>HUMIDITY</p>
        <p><span className="reading">{hum !== null ? `${hum} %` : 'N/A'}</span></p>
      </div>
      <div className="card">
        <p>PRESSURE</p>
        <p><span className="reading">{pres !== null ? `${pres} hPa` : 'N/A'}</span></p>
      </div>
    </div>
  );
};

export default Content;
