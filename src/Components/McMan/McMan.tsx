import * as THREE from "three";
import React, { useEffect } from "react";
import {
  PerspectiveCamera,
  useGLTF,
  useScroll,
  useTexture,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Canvas } from "@react-three/fiber";

import CameraHelper from "../../Utils/CameraHelper";
import AnglesToRadians from "../../Utils/AngelsToRadians";
import { ModelWithTexture } from "../../Utils/Interfaces/Interfaces";

type GLTFResult = GLTF & {
  nodes: {
    Head: THREE.Mesh;
    Body: THREE.Mesh;
    Arms: THREE.Mesh;
    Legs: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export const Model: React.FC<ModelWithTexture> = ({ texture, rotation }) => {
  const { nodes, materials } = useGLTF("Models/McMan.glb") as GLTFResult;

  return (
    <group rotation={[rotation.x, rotation.y, rotation.z]} dispose={null}>
      <mesh geometry={nodes.Head.geometry}>
        <meshStandardMaterial map={useTexture(texture.head)} />
      </mesh>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial map={useTexture(texture.body)} />
      </mesh>
      <mesh geometry={nodes.Arms.geometry}>
        <meshStandardMaterial map={useTexture(texture.body)} />
      </mesh>
      <mesh geometry={nodes.Legs.geometry}>
        <meshStandardMaterial map={useTexture(texture.feet)} />
      </mesh>
    </group>
  );
};

export const McMan: React.FC<ModelWithTexture> = ({ texture, rotation }) => {
  return (
    <Canvas
      style={{
        width: "50%",
        height: "50%",
      }}
      shadows
    >
      <Model rotation={rotation} texture={texture} />
      <ambientLight intensity={0.4} />
      <directionalLight intensity={1} position={[0, 10, 10]} />
      <PerspectiveCamera makeDefault position={[0, 3, 10]} />
    </Canvas>
  );
};

useGLTF.preload("Models/McMan.glb");
