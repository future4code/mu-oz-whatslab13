import React from 'react'
import style from './App.css';

class App extends React.Component {
  state={
    mensagem:[{nomeUsuario:'', mensagemUsuario:''}],
    valorInputUsuario:'',
    valorInputMensagem:''
  }
  ImprimeMensagem = (event) =>{
    event.preventDefault()
    const novaMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      mensagemUsuario: this.state.valorInputMensagem
    }
    const novosMensagens = [novaMensagem, ...this.state.mensagem]
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
    const componenteMensagem = [...this.state.mensagem].map((mensagem, index) => {
      if (mensagem.nomeUsuario) {
      return(
        <p key={index} className="novaMensagem">
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
              <form  className="messenger-info" onSubmit={this.ImprimeMensagem}>
                  <input className="input-usuario"
                    value={this.state.valorInputUsuario}
                    onChange={this.onChangeInputUsuario}
                    placeholder="Usuário"
                  />
                  <input className="input-mensagem"
                    value={this.state.valorInputMensagem}
                    onChange={this.onChangeInputMensagem}             
                    placeholder="Mensagem..."
                  />
                  <button className="send-button" type={'submit'}>Enviar</button>
              </form>
            </div>
          </div>
        </div> 
    )
  }
}
export default App;
