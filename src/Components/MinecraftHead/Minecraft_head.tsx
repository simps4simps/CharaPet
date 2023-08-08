import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_14: THREE.Mesh;
  };
  materials: {
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "Models/minecraft_head.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[2.527, 1.552, 0.615]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <group rotation={[2.527, 1.552, 0.615]}>
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.016"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("Models/minecraft_head.glb");
