import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [type, setType] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hey Noun, une petite bière ?</h2>
      </header>
      <div>
        <button onClick={ () => setType("img/biere-blonde.jpg")}>Blonde</button>
        <button onClick={ () => setType("img/biere-brune.jpg")}>Brune</button>
        <button onClick={ () => setType("img/gay.jpg")}>Blanche</button>
      </div>
      <img src={type} />
    </div>
  );
}

export default App;
