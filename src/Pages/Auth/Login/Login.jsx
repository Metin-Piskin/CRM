import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setauth } from "../../../Redux/Reducer";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import "./Login.css";
import Logo from "../../../Assets/Logo.png";

const Login = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  return (
    <div className="LoginContainer">
      <img src={Logo} alt="" className="LoginLogoImg" />

      <div className="LoginInnerContainer">
        <div className="LoginMailContainer">
          <MdOutlineEmail color="#101928" />
          <input placeholder="E-Mail" className="LoginMailInput" type="email" />
        </div>
        <div className="LoginPasswordContainer">
          <RiLockPasswordLine color="#101928" />
          <input
            placeholder="Password"
            className="LoginPasswordInput"
            type="password"
          />
        </div>
        <button className="ForgotPasswordButton">Forgot Password</button>
        <Link
          className="LoginButton"
          onClick={() => dispatch(setauth(!auth))}
          to={"/"}
        >
          Log in
        </Link>
        <Link className="SigninButton" to={"/Signin"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Login;
