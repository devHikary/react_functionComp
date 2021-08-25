import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome, cpf, promocoes, novidades);
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
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
        value={cpf}
        onChange={(evento) => {
          setCpf(evento.target.value);
        }}
        margin="normal"
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(evento) => {
              setPromocoes(evento.target.checked);
            }}
            checked={promocoes}
            defaultChecked={promocoes}
            color="primary"
            name="promocoes"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(evento) => {
              setNovidades(evento.target.checked);
            }}
            checked={novidades}
            defaultChecked={novidades}
            color="primary"
            name="novidades"
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
