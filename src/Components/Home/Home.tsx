import React, { useState, useEffect } from "react";
import "./Home.css";

import CharachterMods from "../CharachterMods/CharachterMods";
import { McMan } from "../McMan/McMan";

import { Head } from "../IsolatedMcModels/Head";
import { Body } from "../IsolatedMcModels/Body";
import { Leg } from "../IsolatedMcModels/Leg";

import CharachterModSlider from "../CharachterModSlider/CharachterModSlider";
import { activeModel } from "../../Utils/Types/Types";
import AnglesToRadians from "../../Utils/AngelsToRadians";

import Textures from "../../Utils/Texures";

const Home = () => {
  const [activeHead, setActiveHead] = useState<activeModel>();
  const [activeBody, setActiveBody] = useState<activeModel>();
  const [activeFeet, setActiveFeet] = useState<activeModel>();

  return (
    <>
      <div id="charachter-preview">
        <div id="circle"></div>
        <div className="mc-man">
          <McMan
            rotation={{
              x: AnglesToRadians(20),
              y: AnglesToRadians(-25),
              z: 0,
            }}
            texture={{
              body: activeBody?.texture || "/1.png",
              head: activeHead?.texture || "/1.png",
              feet: activeFeet?.texture || "/1.png",
            }}
          />
        </div>
      </div>

      <div id="charachter-mods-wrapper">
        <CharachterModSlider
          Model={Head}
          Wrapper={CharachterMods}
          setActive={setActiveHead}
          role="Head"
          texture={Textures.head}
        />
        <CharachterModSlider
          Model={Body}
          Wrapper={CharachterMods}
          setActive={setActiveBody}
          role="Body"
          texture={Textures.body}
        />
        <CharachterModSlider
          Model={Leg}
          texture={Textures.feet}
          Wrapper={CharachterMods}
          setActive={setActiveFeet}
          role="Feet"
        />
      </div>
    </>
  );
};

export default Home;
