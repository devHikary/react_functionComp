import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        margin="normal"
        variant="outlined"
        id="cep"
        label="CEP"
        type="number"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        margin="normal"
        variant="outlined"
        fullWidth
        id="endereco"
        label="Endereco"
        type="text"
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        margin="normal"
        variant="outlined"
        id="numero"
        label="Numero"
        type="number"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        margin="normal"
        variant="outlined"
        id="estado"
        label="Estado"
        type="text"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
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
