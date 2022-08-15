import React from 'react';
import './App.css';

function App() {

  const clickBtn = (): void => {
    alert("Hello World")
  }

  return (
    <button onClick={clickBtn}>Click!</button>
  );
}

export default App;