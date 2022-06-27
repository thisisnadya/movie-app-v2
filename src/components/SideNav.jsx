import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../data/SideNavData";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../css/custom.css";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SProSidebar collapsed={isOpen}>
      <SidebarHeader>
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      </SidebarHeader>
      <Menu>
        {Nav.map((item) => (
          <SMenuItem icon={item.icon} style={{ fontSize: "16px" }}>
            {item.title}
            <Link to={item.path}></Link>
          </SMenuItem>
        ))}
      </Menu>
    </SProSidebar>
  );
}

const SProSidebar = styled(ProSidebar)`
  min-height: 100vh;
  position: fixed;
`;

const SMenuItem = styled(MenuItem)`
  color: #10f5cc;
  svg {
    font-size: 20px;
  }
`;

export default SideNav;
