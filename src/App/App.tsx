import React from "react";
import "./App.css";

import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <nav id="nav-bar">
        <NavBar />
      </nav>

      <div className="view">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
