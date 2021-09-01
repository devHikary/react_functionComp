import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {

  return (
    <form>
      <TextField
        margin="normal" variant="outlined" fullWidth        
        id="email" label="email" type="email" />
      <TextField
        margin="normal" variant="outlined" fullWidth
        id="senha" label="senha" type="passaword" />
      <Button
        variant="contained" color="primary"
        type="submit">Cadastrar</Button>

    </form>
  );
}

export default DadosUsuario;