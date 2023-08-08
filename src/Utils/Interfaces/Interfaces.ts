import { activeModel } from "../Types/Types";

import * as THREE from "three";

export interface CharachterMod {
  Model: React.FunctionComponent;
  Wrapper: React.FC<Model3D>;
  setActive: React.Dispatch<activeModel>;
  role: string;
}

export interface Model3D {
  Model: React.FunctionComponent;
}

export interface ModelWithTexture {
  rotation?: THREE.Euler;
  texture: {
    head: THREE.Texture;
    body: THREE.Texture;
    feet: THREE.Texture;
  };
}
