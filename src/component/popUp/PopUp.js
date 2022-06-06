import styled from "styled-components";
import { FaWindowClose } from 'react-icons/fa';
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UseContext";
import { useNavigate } from "react-router-dom";

function PopUp({dadosCartao, name, setPopUpVisivel}) {

  return (
    <Container>
      <Topo setPopUpVisivel={setPopUpVisivel}/>
       <ContainerButton dadosCartao={dadosCartao} name={name} setPopUpVisivel={setPopUpVisivel} />
       
    </Container>
  );   
}

function ContainerButton({dadosCartao, name, setPopUpVisivel}){

  const { token } = useContext(UserContext);

  const {dadosUsuario,setDadosUsuario} = useContext(UserContext);

  console.log("usuario", dadosUsuario)
  const navigate= useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  function Submit(){
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", dadosCartao, config)

    promise.then((response)=>{
      
      const atualizarPlano = {
        ...dadosUsuario,
        membership: response.data.membership
      }
      setDadosUsuario(atualizarPlano);
      console.log()
      navigate("/home");
    })
    promise.catch((err)=>{alert("erro ao assinar o plano")});
  }

  return(
    <DivBotoes>
      <p>
        {`Tem certeza que deseja assinar o plano ${name}?`}
      </p>
      <div>
        <Button onClick={Submit}  cor="#FF4791;" >sim</Button>
        <Button onClick={()=>setPopUpVisivel(false)} cor="#CECECE;" >não</Button> 
      </div>
      
    </DivBotoes>
  )
}

function Topo({setPopUpVisivel}) {
  return (
    <ContainerTopo>
      <FaWindowClose onClick={()=>setPopUpVisivel(false)} color="#FFFFFF" size={"30px"} />
    </ContainerTopo>
  );
}

const DivBotoes = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 248px;
  height: 210px;
  background: #FFFFFF;
  border-radius: 12px;

  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    margin-top: 33px;
  }
  
  div{
    display: flex;
    margin-bottom: 20px;
  }
 

`

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right: 0;
  background: rgb(14, 14, 19, 0.5) ;
  height: 100vh;

`

const ContainerTopo = styled.div`
    display: flex;
    position: absolute;
    top: 24px;
    right: 24px;

`

const Button = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 95px;
  height: 52px;
  background: ${props => props.cor};
  border-radius: 8px;
  margin-left: 10px;
  
`
export default PopUp;