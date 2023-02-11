import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import ModalAddMaterial from "../ModalAddMaterial";

const Materials = () => {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();

  const showModal = () => {
    params.set("modal", "addNewMaterial");
    setParams(params);
  };
  const closeModal = () => {
    params.delete("modal");
    setParams(params);
  };

  return (
    <Container>
      <div>
        <AddButton onClick={showModal}>Add new material</AddButton>

        {params.has("modal") ? (
          <ModalAddMaterial closeModal={closeModal} />
        ) : null}

        <Outlet />

        <ul>
          <MaterialBlock>
            <h4>Material 1</h4>

            <DetailsButton onClick={() => navigate("1/details")}>
              Details
            </DetailsButton>
          </MaterialBlock>
          <MaterialBlock>
            <h4>Material 2 </h4>

            <DetailsButton onClick={() => navigate("2/details")}>
              Details
            </DetailsButton>
          </MaterialBlock>
        </ul>
      </div>
    </Container>
  );
};

export default Materials;

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

const AddButton = styled.button`
  background-color: orange;
  align-items: flex-end;
  margin: 10px -795px auto auto;
  border-radius: 30px;
  border: 1px solid orange;
  color: white;
  padding: 5px 15px;
  cursor: pointer;
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
