import React from "react";
import "./Home.css";

import CharachterMods from "../CharachterMods/CharachterMods";
import { Model } from "../MinecraftHead/Minecraft_head";

const Home = () => {
  return (
    <>
      <div id="charachter-preview">
        <div id="circle"></div>
      </div>

      <div id="charachter-mods-wrapper">
        <CharachterMods Model={Model} />
        <CharachterMods Model={Model} />
        <CharachterMods Model={Model} />
      </div>
    </>
  );
};

export default Home;
