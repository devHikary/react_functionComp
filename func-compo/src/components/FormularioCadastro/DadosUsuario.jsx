import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario({ aoEnviar }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        id="email"
        required
        label="email"
        type="email"
      />
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        required
        id="senha"
        label="senha"
        type="passaword"
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;