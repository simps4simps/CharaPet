import React from "react";
import "./App.css";

import NavBar from "../Components/NavBar/NavBar";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <nav id="nav-bar">
        <NavBar />
      </nav>

      <div className="view">
        <Routes>
          <Route path="/" />
          <Route path="/Contact" />
          <Route path="/About" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
