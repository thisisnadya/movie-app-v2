import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../data/SideNavData";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SProSidebar collapsed={isOpen}>
      <SidebarHeader>
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
      </SidebarHeader>
      <Menu>
        {Nav.map((item) => (
          <MenuItem icon={item.icon} style={{ fontSize: "16px" }}>
            {item.title}
            <Link to={item.path}></Link>
          </MenuItem>
        ))}
      </Menu>
    </SProSidebar>
  );
}

const SProSidebar = styled(ProSidebar)`
  min-height: 100vh;
  position: fixed;
`;

export default SideNav;
