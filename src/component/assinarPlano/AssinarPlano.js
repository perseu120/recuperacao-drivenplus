import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { FaMoneyBillWave } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa';

import PopUp from "../popUp/PopUp.js";
import UserContext from "../contexts/UseContext";

function AssinarPlano() {
  const [nomeCartao, setNomeCartao] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [CVC, setCVC] = useState("");
  const [validade, setValidade] = useState("");

  const [popUpVisivel, setPopUpVisivel] = useState(false);
  const [dadosAPI, setDadosAPI] = useState(null);
  const { id } = useParams();

  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const dadosCartao = {
    membershipId: id,
    cardName: nomeCartao,
    cardNumber: numeroCartao,
    securityNumber: parseInt(CVC),
    expirationDate: validade
  }

  useEffect(() => {

    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${id}`, config)

    promise.then((response) => {

      setDadosAPI(response.data)

    })
    promise.catch((err) => console.log(err))

  }, [])

  function Topo() {
    return (
      <ContainerTopo>
        <Link to={"/subscriptions"}><ion-icon name="arrow-undo"></ion-icon></Link>
      </ContainerTopo>
    );
  }

  function LogoPlano() {

    return (

      <ContainerLogoPlano >

        <img src={dadosAPI.image} alt="Logo do plano" />

        <h2>
          {dadosAPI.name}
        </h2>
      </ContainerLogoPlano>
    );
  }

  function DadosPlano() {

    return (
      <ContainerDadosPlano>


        <h6><FaClipboardList color={"#FF4791"} /> Beneficios:</h6>
        <ol >
          {dadosAPI.perks.map((itensPlano) => (<li key={itensPlano.id}>{itensPlano.title}</li>))}
        </ol>



        <h6><FaMoneyBillWave color={"#FF4791"} /> Preço:</h6>
        <ul>
          <li>{`R$ ${dadosAPI.price} cobrados mensalmente`}</li>
        </ul>

      </ContainerDadosPlano>
    );
  }

  return (
    <>
      {dadosAPI ?
        <Container>
          <Topo />
          <LogoPlano />
          <DadosPlano />
          < Formulario setPopUpVisivel={setPopUpVisivel} nomeCartao={nomeCartao} setNomeCartao={setNomeCartao} numeroCartao={numeroCartao} setNumeroCartao={setNumeroCartao} CVC={CVC} setCVC={setCVC} validade={validade} setValidade={setValidade} />
        </Container>
        : console.log("carregando")
      }

      {popUpVisivel && dadosAPI ? <PopUp dadosCartao={dadosCartao} name={dadosAPI.name} setPopUpVisivel={setPopUpVisivel} /> : <></>}
    </>

  );

}

function Formulario({setPopUpVisivel, nomeCartao, setNomeCartao, numeroCartao, setNumeroCartao, CVC, setCVC, validade, setValidade}) {

  const mudaEstadoPopup = false;

  function renderizarPopUp(e){
    e.preventDefault();
    setPopUpVisivel(!mudaEstadoPopup)
  }


  return (

    <form
      onSubmit={renderizarPopUp}
    >

      <SectionBox>
        <input
          placeholder="Nome impresso no cartão"
          value={nomeCartao}
          onChange={(e) => setNomeCartao(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="Numero do cartão"
          value={numeroCartao}
          onChange={(e) => setNumeroCartao(e.target.value)}
          type="text"
        ></input>
      </SectionBox>

      <SectionFlex>
        <input
          placeholder="Codigo segurança"
          value={CVC}
          onChange={(e) => setCVC(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="validade"
          value={validade}
          onChange={(e) => setValidade(e.target.value)}
          type="text"
        ></input>
      </SectionFlex>

      <Button type="submit">Assinar</Button>
    </form>
  );
}

const SectionFlex = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    height: 52px;
    width: 145px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 5px;
  }
  
  
`

const SectionBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;

  input{
    height: 52px;
    width: 299px;
    background: #FFFFFF;
    border-radius: 8px;
    margin-bottom: 5px;
  }
`


const ContainerDadosPlano = styled.div`
  display: flex-box;
  justify-content: center;
  align-items: center;
  flex-direction: start;
  margin-left: 40px;
  width:100%;

  ol{
    margin-left: 16px;
    list-style-position: inside;
    list-style-type: decimal;
    color: #FFFFFF;
    margin-bottom: 10px;
  }

  h6{
    color: #FFFFFF;
    margin-bottom: 10px;
  }
  ul{
    margin-left: 16px;
    li{
      list-style-position: inside;
      color: #FFFFFF;
    }
  }

  

`

const ContainerLogoPlano = styled.div`
  display: flex-box;
  justify-content: center;
  align-items: center;
  flex-direction: start;
  margin-bottom: 22px;

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
  Formulario{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

const Button = styled.button`

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
  margin-left: auto;
  margin-right: auto;
`
export default AssinarPlano;