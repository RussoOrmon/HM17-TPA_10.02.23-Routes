import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Students = () => {

  return (
    <Container>
  
      <ul>
        <MaterialBlock>
          <h4>Student Name 1</h4>
          <Link to="1/details">
            <DetailsButton>Details</DetailsButton>
          </Link>
        </MaterialBlock>
        <MaterialBlock>
          <h4>Student Name 2</h4>

          <Link to="2/details">
            <DetailsButton>Details</DetailsButton>
          </Link>
        </MaterialBlock>
      </ul>

    </Container>
  );
};

export default Students;

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

const MaterialBlock = styled.li`
  background-color: white;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 850px;
  margin: 10px;
  padding: 5px 30px;
`;

const DetailsButton = styled.button`
  background-color: #049676;
  width: 120px;
  height: 30px;
  border: 1px solid #049676;
  border-radius: 30px;
  padding: auto 30px;
  cursor: pointer;
`;
