import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiUserCircle } from 'react-icons/hi';
import UserContext from "../contexts/UseContext";


function TelaInicial() {


    const { dadosUsuario, token } = useContext(UserContext);
    const navigate = useNavigate();
    const { membership } = dadosUsuario;

    function cancelarPlano(){

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
    
        promise.then(()=>{
            alert("Plano cancelado com sucesso");
            navigate("/subscriptions");
        })
        promise.catch((err)=>{console.log(err)});
    }

    return (
        <Container>

            <Topo image={dadosUsuario.membership.image} />
            <h2>
                Olá, {dadosUsuario.name}
            </h2>

            <Div>
                <section>
                    {membership.perks.map((itemPlano) => (<a key={itemPlano.id} href={itemPlano.link} target="_blank" ><Button cor={"#FF4791;"} >{itemPlano.title}</Button></a>))}

                </section>
                <section>
                    <Button onClick={()=>{navigate("/subscriptions")}} cor={"#FF4791;"} > Mudar Plano</Button>
                    <Button onClick={cancelarPlano}  cor={"#FF4747;"} > Cancelar plano</Button>
                </section>
            </Div>


        </Container>
    );
}

function Topo({ image }) {
    return (
        <ContainerTopo>
            <img src={image} />
            <HiUserCircle color=" #FFFFFF" size={"30px"} />
        </ContainerTopo>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-around;

    section{
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
    a:visited{
        color: #FFFFFF;
    }
  }


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
    background: ${props => props.cor};
    border-radius: 8px;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

`


export default TelaInicial;