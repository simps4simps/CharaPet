import * as THREE from "three";
import React from "react";

export type activeModel = {
  role: string;
  model: Element;
  texture: string | null;
};

export type CameraHelperProps = {
  position: number[];
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};

export type Texture = {
  texture: string;
};

export type TextureArray = {
  head: string[];
  body: string[];
  feet: string[];
};
