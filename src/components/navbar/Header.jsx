import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const styleNav = ({ isActive }) => ({ color: isActive ? "black" : "white" });

  return (
    <>
      <ContainerHeader>
        <HeaderNavbar>
          <NavLink to="materials" style={styleNav}>
            Materials
          </NavLink>
        </HeaderNavbar>
        <HeaderNavbar>
          <NavLink to="students" style={styleNav}>
            Students
          </NavLink>
        </HeaderNavbar>
        <HeaderNavbar>
          <NavLink to="ratings" style={styleNav}>
            Ratings
          </NavLink>
        </HeaderNavbar>
      </ContainerHeader>
      <Outlet />
    </>
  );
};

export default Header;

const ContainerHeader = styled.ul`
  background-color: #4aa5f5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 200px;
  margin-top: 0;
  width: 985px;
  height: 100px;
  position: absolute;
  padding: 7px;
`;
const HeaderNavbar = styled.li`
  color: white;
  list-style: none;
  font-size: 24px;
  font-weight: 500;
  /*text-underline-offset: red;*/
  margin-right: 30px;
  margin-left: 10px;

  & .active {
    color: #f0a10f;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 5px;
  }
`;
