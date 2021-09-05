import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosEntrega() {
  return (
    <form>
      <TextField
        margin="normal"
        variant="outlined"
        id="cep"
        label="CEP"
        type="number"
      />
      <TextField
        margin="normal"
        variant="outlined"
        fullWidth
        id="endereco"
        label="Endereco"
        type="text"
      />
      <TextField
        margin="normal"
        variant="outlined"
        id="numero"
        label="Numero"
        type="number"
      />
      <TextField
        margin="normal"
        variant="outlined"
        id="estado"
        label="Estado"
        type="text"
      />
      <TextField
        margin="normal"
        variant="outlined"
        id="cidade"
        label="Cidade"
        type="text"
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;