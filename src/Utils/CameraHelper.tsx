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
      rotation={[rotation.x, rotation.y, rotation.z]}
    >
      <cameraHelper args={[perspectiveCamera]} />
    </group>
  );
};

export default CameraHelper;
