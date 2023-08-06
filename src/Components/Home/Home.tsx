import React from "react";
import "./Home.css";

import CharachterMods from "../CharachterMods/CharachterMods";

const Home = () => {
  return (
    <>
      <div id="charachter-preview">
        <div id="circle"></div>
      </div>

      <div id="charachter-mods-wrapper">
        <CharachterMods />
        <CharachterMods />
        <CharachterMods />
      </div>
    </>
  );
};

export default Home;
