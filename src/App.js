import React from "react";
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } />
        <h3 className="front">This is a header</h3>
        <input type="range"></input>
        <h1 className="front">
          $500
        </h1>
        <button>Contact</button>
      </header>
    </div>
  );
}

export default App;
