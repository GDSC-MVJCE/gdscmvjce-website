import { Suspense, useLayoutEffect } from "react";
import * as THREE from "three";
import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";

import CanvasLoader from "../loaders/CanvasLoader";
import { StyledCanvas } from "./GDSCLogo.styled";
import GDSCModel from "./models/GDSCModel";

const modelPath = "/models/gdsc_model.gltf";
const envPath = "/models/warehouse.hdr";

function Logo() {
  const { nodes, materials } = useGLTF(modelPath);

  useLayoutEffect(() => {
    for (let i = 0; i < 8; i++) {
      materials[`mat${i}`].emissiveIntensity = 0;
      materials[`mat${i}`].roughness = 0.1;
      materials[`mat${i}`].metalness = 1;
      materials[`mat${i}`].transparent = false;
    }
  }, [materials]);

  return (
    <mesh>
      <GDSCModel
        nodes={nodes}
        materials={materials}
        scale={0.115}
        position={[0, 0, 0]}
      />
    </mesh>
  );
}

function LogoCanvas() {
  return (
    <StyledCanvas
      dpr={[1, 2]}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        alpha: true
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={35} />
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={20}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          enablePan={false}
        />
        <Environment files={envPath} />
        {/* <gridHelper
          args={[18, 5, "#D9D9D9", "#D9D9D9"]}
          position={[0, 2.8, 0]}
        />
        <gridHelper
          args={[18, 5, "#D9D9D9", "#D9D9D9"]}
          position={[0, -2.8, 0]}
        /> */}
        <Logo />
      </Suspense>
      <Preload all />
    </StyledCanvas>
  );
}

export default LogoCanvas;
