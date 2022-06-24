import React from "react";
import styled from "styled-components";
import Nav from "../data/SideNavData";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <SNav>
      <div>
        {Nav.map((item, index) => (
          <NavItem to={item.path}>
            {item.icon}
            <p key={index}>{item.title}</p>
          </NavItem>
        ))}
      </div>
    </SNav>
  );
}

const SNav = styled.div`
  background-color: #2a2438;
  color: white;
  height: 100vh;
  padding: 2rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
  padding: 1rem 0rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;

  p {
    margin-left: 1rem;
  }
  &.active {
    color: #aca5a5;
  }
`;

export default SideNav;
