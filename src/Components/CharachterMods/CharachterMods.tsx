import React, { useContext, useRef } from "react";
import "./CharachterMods.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import AnglesToRadians from "../../Utils/AngelsToRadians";

import { Model3D } from "../../Utils/Interfaces/Interfaces";

const CharachterMods: React.FC<Model3D> = ({ Model, texture }) => {
  return (
    <div className="charachter-mods" data-texture={`${texture}`}>
      <Canvas shadows id="canvas">
        <PerspectiveCamera
          makeDefault
          position={[0, 5, 10]}
          rotation={[AnglesToRadians(-30), 0, 0]}
        />

        <Model texture={texture} Model={Model} />

        <ambientLight />
        <directionalLight />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default CharachterMods;
