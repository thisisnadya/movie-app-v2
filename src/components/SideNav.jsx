import React, { useState } from "react";
import styled from "styled-components";
import { Nav, Personal, NavAccount } from "../data/SideNavData";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../css/custom.css";

function SideNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SProSidebar collapsed={isOpen}>
      <SidebarHeader
        style={{ padding: "1.5rem", color: "#FFF", textAlign: "center" }}
      >
        {isOpen ? (
          <BsArrowRightCircleFill
            style={{ fontSize: "16px" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <BsArrowLeftCircleFill
            style={{ fontSize: "16px" }}
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </SidebarHeader>
      <Menu>
        {Nav.map((item, index) => (
          <SMenuItem key={index} icon={item.icon} style={{ fontSize: "18px" }}>
            {item.title}
            <Link to={item.path}></Link>
          </SMenuItem>
        ))}
      </Menu>
      <Menu>
        {Personal.map((item, index) => (
          <SMenuItem key={index} icon={item.icon} style={{ fontSize: "18px" }}>
            {item.title}
            <Link to={item.path}></Link>
          </SMenuItem>
        ))}
      </Menu>
      <Menu>
        {NavAccount.map((item, index) => (
          <SMenuItem key={index} icon={item.icon} style={{ fontSize: "18px" }}>
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
  font-family: "Josefin Sans", sans-serif;
  svg {
    font-size: 20px;
  }
`;

export default SideNav;
