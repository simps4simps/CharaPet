import React from "react";
import "./Home.css";

import CharachterMods from "../CharachterMods/CharachterMods";
import { Model } from "../MinecraftHead/Minecraft_head";

import CharachterModSlider from "../CharachterModSlider/CharachterModSlider";

const Home = () => {
  return (
    <>
      <div id="charachter-preview">
        <div id="circle"></div>
      </div>

      <div id="charachter-mods-wrapper">
        <CharachterModSlider Model={Model} Wrapper={CharachterMods} />
        <CharachterModSlider Model={Model} Wrapper={CharachterMods} />
        <CharachterModSlider Model={Model} Wrapper={CharachterMods} />
      </div>
    </>
  );
};

export default Home;
