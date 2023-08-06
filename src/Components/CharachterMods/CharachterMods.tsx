import React, { useContext } from "react";
import "./CharachterMods.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CharachterMods = () => {
  return (
    <div className="charachter-mods">
      <ArrowBackIosIcon className="arrows-icon" />
      <Canvas shadows id="canvas">
        <OrbitControls />

        <mesh>
          <boxGeometry args={[5, 5, 5]} />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
      <ArrowForwardIosIcon className="arrows-icon" />
    </div>
  );
};

export default CharachterMods;
