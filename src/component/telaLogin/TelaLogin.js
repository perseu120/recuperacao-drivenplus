import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/Driven_white 1.png"
 import UserContext from "../contexts/UseContext";

function TelaLogin() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { token, setToken, dadosUsuario, setDadosUsuario} = useContext(UserContext); 

  const navigate = useNavigate();

  function login() {
    const body = {
      email,
      password: senha
    }

    const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", body);

    promise.then((response) => {

      console.log(response.data);
      setDadosUsuario(response.data);
      setToken(response.data.token);

      if(response.data.membership === null){
        navigate('/subscriptions');
      }else{
        navigate('/home');
      }
      
    })
    promise.catch((err) => { alert("erro ao realizar login"); })

  }

  return (

    <Container>
      <img src={logo} alt="logotipo" />

      <Form onSubmit={(e) => { e.preventDefault() }}>
        <input placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email"></input>
        <input placeholder="senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password"></input>

        <button type="submit" onClick={() => { login() }}>Entrar</button>
      </Form>
      <Link to="/sign-up">
        não tem uma conta? cadastre-se!
      </Link>
    </Container>
  );
}

export default TelaLogin;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  height: 100vh;

  img{
      width: 299px;
      height: 49px;
      margin-top: 68px;
      margin-bottom: 100px;
  }

  a{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;

    color: #FFFFFF;

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
    border-radius: 8px;
    border: 1px solid #D5D5D5;
    margin-bottom: 16px;
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 122px;
    gap: 10px;

    width: 298px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    margin-bottom: 24px;
    margin-top: 8px;

  }


`