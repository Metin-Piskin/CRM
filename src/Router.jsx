import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./index.css";

import Header from "./Components/Header";

import Dashboard from "./Pages/Dashboard";
import ProjectManager from "./Pages/ProjectManager";
import Training from "./Pages/Training";
import Organization from "./Pages/Organization";
import Tickets from "./Pages/Tickets";

import Login from "./Pages/Auth/Login";
import Signin from "./Pages/Auth/Signin";

import { useSelector, useDispatch } from "react-redux";
import { setauth } from "./Redux/Reducer";

const RouterPage = () => {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  return (
    <>
      {auth ? (
        <Router>
          <div className="MainContainer">
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/ProjectManager" element={<ProjectManager />} />
              <Route path="/Training" element={<Training />} />
              <Route path="/Organization" element={<Organization />} />
              <Route path="/Tickets" element={<Tickets />} />
            </Routes>
          </div>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signin" element={<Signin />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default RouterPage;
