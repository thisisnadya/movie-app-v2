import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";

const Nav = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: <BsIcons.BsListUl />,
  },
  {
    title: "Watchlist",
    path: "/watchlist",
    icon: <AiIcons.AiFillHeart />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoIosSettings />,
  },
];

export default Nav;
