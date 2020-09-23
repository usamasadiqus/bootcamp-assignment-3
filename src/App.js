import React, { useState } from 'react';
import Message from './Message';
import './App.css';

function App() {
  let [count, setCount] = useState(1);
  let [lights, changeColor] = useState(false);
  return (
    <div className={`card ${lights ? 'dark' : ''}`}>
      <Message counter={count} />
      <div className="buttons">
        <button onClick={() => setCount(count += 1)}>Increment</button>
        <button onClick={() => setCount(count -= 1)}>Decrement</button>
      </div>
      <button className="changingButton" onClick={() => changeColor(!lights)}>Change Card Appearance</button>
    </div>
  );
}

export default App;
