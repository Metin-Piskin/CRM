import React from "react";
import { Link } from "react-router-dom";

import "./Signin.css";
import Logo from "../../../Assets/Logo.png";

const Signin = () => {
  return (
    <div className="SigninContainer">
      <img src={Logo} alt="" className="SigninLogoImg" />
      <div className="SigninInnerContainer">
        <input placeholder="Name" className="SigninInput" type="text" />
        <input placeholder="Surname" className="SigninInput" type="text" />
        <input placeholder="E-Mail" className="SigninInput" type="email" />
        <input placeholder="Call Number" className="SigninInput" type="tel" />
        <input placeholder="Password" className="SigninInput" type="password" />
        <Link className="LoginButton" to={"/Login"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Signin;
