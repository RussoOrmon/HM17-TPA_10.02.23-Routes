import React from 'react'
import styled from 'styled-components';

const ModalAddMaterial = ({closeModal}) => {
  return (
    <Container>
        <h4> Add new material modal </h4>

        <Button onClick={closeModal} > Close modal  </Button>
    </Container>
  )
}

export default ModalAddMaterial;

const Container =styled.div`
    background-color: #ddc1c1;
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column ;
    margin:  auto 320px;
    position: absolute;
    z-index: 10;
`
const Button = styled.button`
  background-color: #049676;
  width: 120px;
  height: 30px;
  border: 1px solid #049676;
  border-radius: 30px;
  padding: auto 30px;
  /*margin-top: 100px;*/
  margin:  auto 330px;
  cursor:pointer;
`;
