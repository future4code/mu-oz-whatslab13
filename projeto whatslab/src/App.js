import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import {ImprimeMensagem} from "./adicionar.js";

class App extends React.Component {
  state={
    mensagem:[{nomeUsuario:'', mensagemUsuario:''}],
    valorInputUsuario:'',
    valorInputMensagem:''
  }
  ImprimeMensagem = () =>{
    const novaMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      mensagemUsuario: this.state.valorInputMensagem
    }
    const novosMensagens = [...this.state.mensagem,novaMensagem]
    this.setState({mensagem: novosMensagens})
    this.setState({ valorInputMensagem:'' })
  }
  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render(){
    const componenteMensagem = [...this.state.mensagem].map((mensagem) => {
      if (mensagem.nomeUsuario) {
      return(
        <p>
        <span><b>{mensagem.nomeUsuario}: </b></span>
          {mensagem.mensagemUsuario}
        </p>
      )}

    })    
    return (
      <div className="App">
        <div className="page-section-container">
          <div className="messenger-container">
            <div className="list-message">
              {componenteMensagem}
            </div>
            <div className="messenger-info">
              <input 
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}
                placeholder="Usuário"
              />
              <input 
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}             
                placeholder="Mensagem"
              />
              <button onClick={this.ImprimeMensagem}>Enviar</button>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}
export default App
