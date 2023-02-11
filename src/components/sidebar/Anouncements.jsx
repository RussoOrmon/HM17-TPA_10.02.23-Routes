import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Anouncements = () => {

  const navigate = useNavigate()

  return (
    <Container>
    <ContainerMain>
    <h3>Anouncements Page: </h3>

    <DetailsButton  onClick={()=>navigate('/courses/students')}   > Go to Students page </DetailsButton>
    </ContainerMain>
    

</Container>
  )
}

export default Anouncements;

const Container = styled.div`
  background-color: #f1e3f1;
  display: flex;
  margin-left: 200px;
  width: 980px;
  height: 100vh;
  position: absolute;
  padding: 7px;
`;

const ContainerMain =styled.div`
    background-color: white;
  width: 80%;
  height: 500px;
  margin: 1 auto;
  text-align: start;
  padding: 10px;

`

const DetailsButton = styled.button`
  background-color: #12cfa6;
  width: 200px;
  height: 30px;
  border: 1px solid #12cfa6;
  border-radius: 30px;
  padding: auto 30px;
  margin-top: 50px;
  cursor: pointer;
`;