import { useState } from 'react';
import database from '../firebase';

function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  // Push Function
  const Push = () => {
    database.ref('user').set({
      name: name,
      age: age,
    }).catch(alert);
  };

  return (
    <div className="App" style={{ marginTop: 50, display: 'flex' }}>
      {/* First Column - Form */}
      <div style={{ flex: 1, padding: '20px' }}>
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

      {/* Second Column - Description */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Description</h2>
        <p>Add your description content here.</p>
      </div>
    </div>
  );
}

export default App;
