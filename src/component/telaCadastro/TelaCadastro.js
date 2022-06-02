import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");

  // const navigate = useNavigate();

  function cadastro() {
    const body = {
      email,
      name: nome,
      image: cpf,
      password: senha
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    promise.then((response) => {
      console.log(response.data);

      // navigate("/");
    });

    promise.catch((err) => {
      alert("erro ao realizar cadastro");
    });
  }

  return (
    <Container>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
        ></input>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCPF(e.target.value)}
          type="text"
        ></input>

        <button onClick={() => cadastro()}>Cadastra</button>
      </Form>

      <Link to="/">
        á tem uma conta? faça login!
      </Link>
    </Container>
  );
}

export default TelaCadastro;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  height: 100vh;

  a{
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    
    color: #52B6FF;
  }

`
const Form = styled.form`

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    margin-top: 8px;
    margin-bottom: 24px;

  }

`
