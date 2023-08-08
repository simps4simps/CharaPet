export type activeModel = {
  role: string;
  model: Element;
} | null;

export type CameraHelperProps = {
  position: number[];
  rotation: {
    x: number;
    y: number;
    z: number;
  };
};
