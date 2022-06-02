import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Plano from "../plano/Plano";
import plano1 from "../../img/Group 1.png"
import plano2 from "../../img/Group 2.png"
import plano3 from "../../img/Group 3.png"



function EscolhaPlano() {

  

  return (
    <Container>
        <h1>
            Escolha seu Plano
        </h1>

        <Plano imagemPlano={plano1} valorPlano={"R$ 39,99"} />
        <Plano imagemPlano={plano2} valorPlano={"R$ 69,99"} />
        <Plano imagemPlano={plano3} valorPlano={"R$ 99,99"} />

    </Container>
  );
}

export default EscolhaPlano;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  height: 100vh;

  h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-bottom: 24px;
  }

`