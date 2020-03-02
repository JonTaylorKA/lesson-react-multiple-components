import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/welcome'
import Clock from './components/clock/clock'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name='Eric' />
        <Clock />
        <Contact />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
