import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import Plano from "../plano/Plano";
import UserContext from "../contexts/UseContext";



function EscolhaPlano() {

  const { token } = useContext(UserContext);
  const [planos, setPlanos] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {

    const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config);

    promise.then((response) => {
      console.log(response.data)
      setPlanos(response.data)
    })

    promise.catch((err) => {
      console.log(err);
    })

  }, [])

  function listarPlanos(){
    if(planos.length === 0){
      return <></>
    }else{
      return planos.map((plano, index)=>(  <Link key={index} to={`/subscriptions/${plano.id}`}> <Plano imagemPlano={plano.image} valorPlano={plano.price} /> </Link> ))
    }

  }

  return (
    <Container>
      <h1>
        Escolha seu Plano
      </h1>

      {listarPlanos()}

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