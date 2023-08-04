import React from "react";
import "./NavBar.css";

import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="links">
        <Link to={"/About"}>About</Link>
      </div>

      <div className="links">
        <Link to={"/Contact"}>Contact</Link>
      </div>

      <div className="links">
        <Link to={"/"}>Home</Link>
      </div>

      <Outlet />
    </>
  );
};

export default NavBar;
