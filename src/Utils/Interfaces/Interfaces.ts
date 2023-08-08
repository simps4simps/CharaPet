import { activeModel } from "../Types/Types";

import * as THREE from "three";

export interface CharachterMod {
  Model: React.FunctionComponent<Model3D>;
  Wrapper: React.FunctionComponent<Model3D>;
  setActive: React.Dispatch<activeModel>;
  role: string;
  texture: string[];
}

export interface Model3D {
  Model: React.FunctionComponent<Model3D>;
  texture: string;
}

export interface ModelWithTexture {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  texture: {
    head: string;
    body: string;
    feet: string;
  };
}
