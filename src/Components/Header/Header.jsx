import React from "react";
import { Link, useLocation } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { PiProjectorScreen } from "react-icons/pi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import { GiExitDoor } from "react-icons/gi";

import "./Header.css";
import Avatar from "../../Assets/Avatar.png";
import Logo from "../../Assets/Logo.png";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="HeaderContainer">
      <img alt="" src={Logo} className="HeaderLogo" />
      <div>
        <li
          className={
            currentPath === "/" ? "HeaderPageListPress" : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/">
            <RxDashboard color={currentPath === "/" ? "#fff" : "#FABA5F"} />
            Dashboard
          </Link>
        </li>
        <li
          className={
            currentPath === "/ProjectManager"
              ? "HeaderPageListPress"
              : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/ProjectManager">
            <PiProjectorScreen
              color={currentPath === "/ProjectManager" ? "#fff" : "#FABA5F"}
            />
            Project Manager
          </Link>
        </li>
        <li
          className={
            currentPath === "/Training"
              ? "HeaderPageListPress"
              : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/Training">
            <HiOutlineAcademicCap
              color={currentPath === "/Training" ? "#fff" : "#FABA5F"}
            />
            Training
          </Link>
        </li>
        <li
          className={
            currentPath === "/Organization"
              ? "HeaderPageListPress"
              : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/Organization">
            <IoCalendarOutline
              color={currentPath === "/Organization" ? "#fff" : "#FABA5F"}
            />
            Organization
          </Link>
        </li>
        <li
          className={
            currentPath === "/Tickets"
              ? "HeaderPageListPress"
              : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/Tickets">
            <LuTicket color={currentPath === "/Tickets" ? "#fff" : "#FABA5F"} />
            Tickets
          </Link>
        </li>
      </div>
      <div className="HeaderUserContainer">
        <img alt="" src={Avatar} className="HeaderAvatar" />
        <div className="HeaderUserInnerContainer">
          <p className="HeaderUserNameText">Metin Pişkin</p>
          <button className="HeaderUserCloseButton">
            <GiExitDoor color="#FFFFFF" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
