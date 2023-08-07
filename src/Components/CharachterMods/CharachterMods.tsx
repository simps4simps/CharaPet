import React, { useContext, useRef } from "react";
import "./CharachterMods.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AnglesToRadians from "../../Utils/AngelsToRadians";

const CharachterMods = () => {
  return (
    <div className="charachter-mods">
      <ArrowBackIosIcon className="arrows-icon" />
      <Canvas shadows id="canvas">
        <PerspectiveCamera
          makeDefault
          position={[0, 10, 10]}
          rotation={[AnglesToRadians(-40), 0, 0]}
        />

        <mesh receiveShadow>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial />
        </mesh>

        <ambientLight />
        <directionalLight />
        {/* <OrbitControls /> */}
      </Canvas>
      <ArrowForwardIosIcon className="arrows-icon" />
    </div>
  );
};

export default CharachterMods;
