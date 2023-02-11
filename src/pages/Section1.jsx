import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import HeaderMaterial from "../components/materials/HeaderMaterial";

const Section1 = ({ title, name }) => {
  const params = useParams();

  return (
    <Container>
      <h3> {title} </h3>
      <h3>
        {name} {params.id}
      </h3>

      <HeaderMaterial />
    </Container>
  );
};

export default Section1;

const Container = styled.div`
  background-color: #ffffff;
  width: 800px;
  height: 500px;
  margin: 150px 250px;
  text-align: start;
  padding: 10px;
  position: absolute;
`;
