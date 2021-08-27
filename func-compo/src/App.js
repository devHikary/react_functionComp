import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
// import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container
        component="article"
        maxWidth="sm"
      >
        <Typography 
          variant="h3" align="center" component="h1"
        >Formulário</Typography >
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCpf}/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;