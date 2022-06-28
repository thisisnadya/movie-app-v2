import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const Nav = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Genres",
    path: "/genres",
    icon: <IoIcons.IoMdColorFilter />,
  },
  {
    title: "Providers",
    path: "/providers",
    icon: <MdIcons.MdComputer />,
  },
];

export const Personal = [
  {
    title: "Watchlist",
    path: "/watchlist",
    icon: <AiIcons.AiFillHeart />,
  },
  {
    title: "My Reviews",
    path: "/my-reviews",
    icon: <MdIcons.MdRateReview />,
  },
  {
    title: "Lists",
    path: "/lists",
    icon: <BsIcons.BsListUl />,
  },
];

export const NavAccount = [
  {
    title: "My Account",
    path: "/account",
    icon: <IoIcons.IoMdPerson />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoIosSettings />,
  },
];

export default Nav;
