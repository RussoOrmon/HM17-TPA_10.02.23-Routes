import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const HeaderMaterial = () => {
  const styleNav = ({ isActive }) => ({ color: isActive ? "black" : "white" });

  return (
    <>
      <ContainerHeader>
        <HeaderNavbar>
          <NavLink to="submitted" style={styleNav}>
            Submitted
          </NavLink>
        </HeaderNavbar>
        <HeaderNavbar>
          <NavLink to="waiting" style={styleNav}>
            Waiting
          </NavLink>
        </HeaderNavbar>
        <HeaderNavbar>
          <NavLink to="late" style={styleNav}>
            Late
          </NavLink>
        </HeaderNavbar>
      </ContainerHeader>
      
      <Outlet />
    </>
  );
};

export default HeaderMaterial;

const ContainerHeader = styled.ul`
  background-color: #21b39f;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  margin-left: -10px;
  width: 780px;
  height: 60px;
`;
const HeaderNavbar = styled.li`
  color: white;
  list-style: none;
  font-size: 24px;
  font-weight: 500;
  text-underline-offset: red;
  margin-right: 30px;
  margin-left: 10px;

  & .active {
    color: #f0a10f;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 5px;
  }
`;
