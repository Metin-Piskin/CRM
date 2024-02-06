import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Dashboard from "./Pages/Dashboard";
import ProjectManager from "./Pages/ProjectManager";
import Training from "./Pages/Training";
import Organization from "./Pages/Organization";
import Tickets from "./Pages/Tickets";

import Header from "./Components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
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
);
