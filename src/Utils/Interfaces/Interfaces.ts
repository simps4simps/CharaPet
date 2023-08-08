import { activeModel } from "../Types/Types";

export interface CharachterMod {
  Model: React.FunctionComponent;
  Wrapper: React.FC<Model3D>;
  setActive: React.Dispatch<activeModel>;
  role: string;
}

export interface Model3D {
  Model: React.FunctionComponent;
}
