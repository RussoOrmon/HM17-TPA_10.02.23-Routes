import React from "react";
import styled from "styled-components";

const Rating = () => {
  return (
    <Container>
      <ContainerMain>
        <h4>Ratings page</h4>
      </ContainerMain>
    </Container>
  );
};

export default Rating;

const Container = styled.div`
    background-color: #f1e3f1;
  display: flex;
  margin-top: 114px;
  margin-left: 200px;
  width: 985px;
  height: 100vh;
  position: absolute;
  padding: 7px;
`;

const ContainerMain =styled.div`
    background-color: white;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  margin-left: 10px;
  text-align: start;
  padding: 10px;

`
