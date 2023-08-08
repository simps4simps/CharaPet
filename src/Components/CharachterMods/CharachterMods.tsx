import React, { useContext, useRef } from "react";
import "./CharachterMods.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import AnglesToRadians from "../../Utils/AngelsToRadians";

import { Model3D } from "../../Utils/Interfaces/Interfaces";

const CharachterMods: React.FC<Model3D> = ({ Model }) => {
  return (
    <div className="charachter-mods">
      <Canvas shadows id="canvas">
        <PerspectiveCamera
          makeDefault
          position={[0, 10, 18]}
          rotation={[AnglesToRadians(-40), 0, 0]}
        />

        <Model />

        <ambientLight />
        <directionalLight />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default CharachterMods;
