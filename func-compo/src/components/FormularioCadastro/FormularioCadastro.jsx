import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          let tmpNome = evento.target.value;
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substr(0, 3);
          }
          setNome(tmpNome);
        }}
        margin="normal"
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(evento) => {
          setSobrenome(evento.target.value);
        }}
        margin="normal"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />

      <TextField
        margin="normal"
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        control={<Switch defaultChecked color="primary" name="promocoes" />}
        label="Promoções"
      />

      <FormControlLabel
        control={<Switch defaultChecked color="primary" name="novidades" />}
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
