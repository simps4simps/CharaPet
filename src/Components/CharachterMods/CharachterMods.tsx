import React, { useContext, useRef } from "react";
import "./CharachterMods.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AnglesToRadians from "../../Utils/AngelsToRadians";

import * as THREE from "three";

type CameraHelperProps = {
  position: number[];
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};

const CameraHelper: React.FC<CameraHelperProps> = ({ position, rotation }) => {
  const perspectiveCamera = new THREE.PerspectiveCamera(40, 1.77, 1, 3);
  return (
    <group
      position={[position[0], position[1], position[2]]}
      rotate-y={rotation.y}
      rotate-x={rotation.x}
      rotate-z={rotation.z}
    >
      <cameraHelper args={[perspectiveCamera]} />
    </group>
  );
};

const CharachterMods = () => {
  return (
    <div className="charachter-mods">
      <ArrowBackIosIcon className="arrows-icon" />
      <Canvas shadows id="canvas">
        <PerspectiveCamera makeDefault position={[0, 5, 10]} />

        <mesh receiveShadow>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial />
        </mesh>

        <ambientLight />
        <directionalLight />
        <CameraHelper
          position={[0, 5, 10]}
          rotation={{
            x: AnglesToRadians(10),
            y: AnglesToRadians(10),
            z: AnglesToRadians(10),
          }}
        />
        <OrbitControls />
      </Canvas>
      <ArrowForwardIosIcon className="arrows-icon" />
    </div>
  );
};

export default CharachterMods;
