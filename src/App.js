import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';


function App() {
  const [rangevalue,setrange] = useState(25);
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } />
        <h3>{rangevalue} Shirts</h3>

        <input type="range" value={rangevalue} onChange={(e)=>setrange(e.target.value)} min="0" max="50"></input>
        
        <h1>
          ${rangevalue * 20} 
        </h1>
        <button>CONTACT</button>
      </header>
    </div>
  );
}

export default App;
