import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Plano from "../plano/Plano";
import plano1 from "../../img/Group 1.png"
import plano2 from "../../img/Group 2.png"
import plano3 from "../../img/Group 3.png"



function AssinarPlano() {



  return (
    <Container>
      <Topo />
      <LogoPlano />
      <DadosPlano />
    </Container>
  );
}

function Topo() {
  return (
    <ContainerTopo>
      <ion-icon name="arrow-undo"></ion-icon>
    </ContainerTopo>
  );
}

function LogoPlano() {
  return (

    <ContainerLogoPlano>
      <img src={plano1} alt="Logo do plano" />

      <h2>
        Driven Plus
      </h2>
    </ContainerLogoPlano>
  );
}

function DadosPlano() {
  return (
    <ContainerDadosPlano>
      <ul>
        <li>Nome</li>
        <li>Telefone</li>
        <li>Casa</li>
        <li>Estado</li>
      </ul>
  

    </ContainerDadosPlano>
  );
}

const ContainerDadosPlano = styled.div`
  display: flex-box;
  justify-content: center;
  align-items: center;
  flex-direction: start;

  ul{
    li{
      color: #FFFFFF;
    }
    
    ion-icon{
    color: #FFFFFF;
    }
  }

  

`

const ContainerLogoPlano = styled.div`
  display: flex-box;
  justify-content: center;
  align-items: center;
  flex-direction: start;

  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
  }
`

const ContainerTopo = styled.div`
    display: flex;
    position: absolute;
    top: 24px;
    left: 24px;

    ion-icon{
      color: #FFFFFF;
      width:30px;
      height: 30px;
    }
`

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
export default AssinarPlano;