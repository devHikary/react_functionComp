# React: Function Components, uma abordagem moderna

Curso da plataforma Alura

Instrutor: **Ricardo Bugan Debs**

**Projeto de um formulário utilizando**

- Abordagem de componentes funcionais
- Material UI
- Hooks

## Como rodar

- Clonar o projeto
- Entrar na pasta do projeto
- Rodar o comando `npm start`

## Anotações

### Aula 1

```jsx
npx create-react-app 
```

[Material-UI: Um framework popular de React UI](https://material-ui.com/pt/)
### Aula 2

- Utilizando os Componentes do Material UI
    - TextField
    - Switch, FormControlLabel
    - Button
    - Typography
    - Container

### Aula 3

[Introdução aos Hooks - React](https://pt-br.reactjs.org/docs/hooks-intro.html)

- Formulário Controlado utilizando hook de useState
- Ao utilizamos o hook de `useState` indicamos para o React que aquele componente quer guardar estado. Para isso são devolvidas duas informações, a primeira é a referência para o valor do estado atual e a segunda é a função que altera esse estado.
    - Precisamos dessa separação para que o React consiga fazer o gerenciamento do componente e chamar o o ciclo de renderização quando o estado for alterado.

### Aula 4

- Desconstrução das props

```jsx
function FormularioCadastro({aoEnviar}) {}
```

### Aula 5

- Deixando a função de validação **fora** do formulário, podemos alterar as validações dependendo da parte do projeto que estamos trabalhando o que torna esse componente mais reutilizável