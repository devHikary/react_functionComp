import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
// import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models/cadastro'

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
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{
          cpf: validarCPF, senha: validarSenha
        }} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;