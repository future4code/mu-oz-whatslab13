import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <div className="messenger-container">
          <div className="list-message">
          <p>
            <span><b>Usuário: </b></span>
            Mensagem...
          </p>
          </div>
          <div className="messenger-info">
            <input placeholder="Usuário"></input>
            <input placeholder="Mensagem"></input>
            <button onClick="">Enviar</button>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
