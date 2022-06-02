import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Plano({imagemPlano, valorPlano}) {

  

  return (

    <Container>
      <img src={imagemPlano} alt="logotipo" />

      <p>{valorPlano}</p>
    </Container>
  );
}

export default Plano;

const Container = styled.div`

    box-sizing: border-box;
    width: 290px;
    height: 180px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;

    img{
        width: 137px;
        height: 92px;
        margin: 42px 22px 42px 16px;
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;

    }

 
`
