import React, { useState, useEffect } from "react";
import "./Home.css";

import CharachterMods from "../CharachterMods/CharachterMods";
import { Model } from "../MinecraftHead/Minecraft_head";
import { McMan } from "../McMan/McMan";

import CharachterModSlider from "../CharachterModSlider/CharachterModSlider";
import { activeModel } from "../../Utils/Types/Types";

const Home = () => {
  const [activeHead, setActiveHead] = useState<activeModel>(null);
  const [activeBody, setActiveBody] = useState<activeModel>(null);
  const [activeFeet, setActiveFeet] = useState<activeModel>(null);

  return (
    <>
      <div id="charachter-preview">
        <div id="circle"></div>
        <div className="mc-man">
          <McMan />
        </div>
      </div>

      <div id="charachter-mods-wrapper">
        <CharachterModSlider
          Model={Model}
          Wrapper={CharachterMods}
          setActive={setActiveHead}
          role="Head"
        />
        <CharachterModSlider
          Model={Model}
          Wrapper={CharachterMods}
          setActive={setActiveBody}
          role="Body"
        />
        <CharachterModSlider
          Model={Model}
          Wrapper={CharachterMods}
          setActive={setActiveFeet}
          role="Feet"
        />
      </div>
    </>
  );
};

export default Home;
