import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiUserCircle } from 'react-icons/hi';
import plano1 from "../../img/Group 1.png"
import UserContext from "../contexts/UseContext";




function TelaInicial() {


    const {dadosUsuario} = useContext(UserContext);
    console.log(dadosUsuario)
    return (
        <Container>

            <Topo />
            <h2>
                Ola fulano
            </h2>

            <Div>
                <section>
                    <Button cor={"#FF4791;"} > botoes de teste</Button>
                    <Button cor={"#FF4791;"} > botoes de teste</Button>
                </section>
                <section>
                    <Button cor={"#FF4791;"} > botoes de teste</Button>
                    <Button cor={"#FF4747;"} > botoes de teste</Button>
                </section>
            </Div>


        </Container>
    );
}

function Topo() {
    return (
        <ContainerTopo>
            <img src={plano1} />
            <HiUserCircle color=" #FFFFFF" size={"30px"} />
        </ContainerTopo>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;
`
const Container = styled.div`

  display: flex;
  
  align-items: center;
  flex-direction: column;
  background: #0E0E13;
  height: 100vh;

  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-top: 12px;
    color: #FFFFFF;
  }
  

`
const ContainerTopo = styled.div`
    display: flex;
    justify-content: space-around;
    align-itens: center;
    width: 100%;
    margin-top: 22px;
    

    img{
        height: 50px;
        width: 56px;
        border-radius: 0px;
    }

`

const Button = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 52px;
  width: 299px;
  border-radius: 8px;
  padding: 18px, 122px, 18px, 122px;
  background: ${props => props.cor}
  border-radius: 8px;
  margin-bottom: 8px;
  
`

export default TelaInicial;