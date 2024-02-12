import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { PiProjectorScreen } from "react-icons/pi";
import { IoCalendarOutline, IoSchoolOutline } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
import { GiExitDoor } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";

import "./Header.css";
import Avatar from "../../Assets/Avatar.png";
import Logo from "../../Assets/Logo.png";

import { useSelector, useDispatch } from "react-redux";
import { setauth } from "../../Redux/Reducer";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

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
            <IoSchoolOutline
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
            currentPath === "/Customers"
              ? "HeaderPageListPress"
              : "HeaderPageList"
          }
        >
          <Link className="HeaderPageListLink" to="/Customers">
            <TbUsersGroup
              color={currentPath === "/Customers" ? "#fff" : "#FABA5F"}
            />
            Customers
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
          <Link
            className="HeaderUserCloseButton"
            onClick={() => dispatch(setauth(!auth))}
            to={"/Login"}
          >
            <GiExitDoor color="#FFFFFF" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
