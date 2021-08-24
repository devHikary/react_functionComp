import React from 'react';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

function FormularioCadastro() {
  return (
    <form>
      <TextField margin="normal"
        id="nome" label="Nome" variant="outlined" fullWidth="true" />

      <TextField margin="normal"
        id="sobrenome" label="Sobrenome" variant="outlined" fullWidth="true" />

      <TextField margin="normal"
        id="cpf" label="CPF" variant="outlined" fullWidth="true" />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="primary"
            name="promocoes"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            color="primary"
            name="novidades"
          />
        }
        label="Novidades"
      />

      <Button
        variant="contained" color="primary"
        type="submit">Cadastrar</Button>
    </form>
  );

}

export default FormularioCadastro;