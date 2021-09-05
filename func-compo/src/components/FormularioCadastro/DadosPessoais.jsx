import React, { useState, useContext } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
    nome: { valido: true, texto: "" },
  });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;

    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) return false;
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        margin="normal"
        id="nome"
        name="nome"
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
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(evento) => {
          setCpf(evento.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        margin="normal"
        id="cpf"
        name="cpf"
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
            color="primary"
            name="novidades"
          />
        }
        label="Novidades"
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
