import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  const styleNav = ({ isActive }) => ({
    color: isActive ? "black" : "#2c7ef1",
    background: isActive ? "#ecc5f4" : "",
    width: "200px",
  });

  return (
    <Main>
      <Container>
        <Outlet />
        <LogoBlock>
          <h2>LOGO</h2>
        </LogoBlock>
        <SideNavBlock>
          <SideNavbar>
            <NavLink to="/courses" style={styleNav}>
              Courses
            </NavLink>
          </SideNavbar>
          <SideNavbar>
            <NavLink to="/anouncements" style={styleNav}>
              Anouncements
            </NavLink>
          </SideNavbar>
          <SideNavbar>
            <NavLink to="/notifications" style={styleNav}>
              Notifications
            </NavLink>
          </SideNavbar>
          <SideNavbar>
            <NavLink to="/schedule" style={styleNav}>
              Schedule
            </NavLink>
          </SideNavbar>
        </SideNavBlock>
      </Container>
    </Main>
  );
};

export default Logo;

const Main =styled.div`
  background-color: #f1e3f1;
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
`

const Container = styled.div`
  background-color: #e6e8c1;
  width: 200px;
  height: 150vh;
  position: absolute;

`;

const LogoBlock = styled.div`
  height: 140px;
  color: #a105a1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SideNavBlock = styled.ul`
  background-color: white;
  width: 99%;
  box-sizing: border-box;
  padding: 8px;
  color: #2c7ef1;
`;

const SideNavbar = styled.h2`
  list-style: none;
  font-size: 22px;
  font-weight: 600;
  margin: 10px;
  text-align: left;
`;
