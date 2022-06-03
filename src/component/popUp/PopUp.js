import styled from "styled-components";
import { FaWindowClose } from 'react-icons/fa';

function PopUp() {

  return (
    <Container>
      <Topo />
       <ContainerButton />
       
    </Container>
  );   
}

function ContainerButton(){
  return(
    <DivBotoes>
      <p>
        Tem certeza que deseja assinar o plano DrivenPlus?
      </p>
      <div>
        <Button cor="#FF4791;" >sim</Button>
        <Button cor="#CECECE;" >não</Button> 
      </div>
      
    </DivBotoes>
  )
}

function Topo() {
  return (
    <ContainerTopo>
      <FaWindowClose color="#FFFFFF" />
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
  background: ${props => props.cor}
  border-radius: 8px;
  margin-left: 10px;
  
`
export default PopUp;