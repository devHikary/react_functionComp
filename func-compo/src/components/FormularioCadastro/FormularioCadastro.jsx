import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function FormularioCadastro() {
  return (
    <form>
      <TextField margin="normal"
      id="nome" label="Nome" variant="outlined" fullWidth="true"/>

      <TextField margin="normal"
      id="sobrenome" label="Sobrenome" variant="outlined" fullWidth="true"/>

      <TextField margin="normal"
      id="cpf" label="CPF" variant="outlined" fullWidth="true"/>

      <label>Promoções</label>
      <input type="checkbox"/>

      <label>Novidaes</label>
      <input type="checkbox"/>

      <Button 
      variant="contained" color="primary"
      type="submit">Cadastrar</Button>
    </form>
  );

}

export default FormularioCadastro;