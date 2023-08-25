import { Suspense, useLayoutEffect } from "react";
import * as THREE from "three";
import {
  Preload,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  CubeCamera,
  Environment
} from "@react-three/drei";
import { useTheme } from "styled-components";
import { RGBELoader } from "three-stdlib";
import { useLoader } from "@react-three/fiber";

import CanvasLoader from "../loaders/CanvasLoader";
import { StyledCanvas } from "./GDSCLogo.styled";

const modelPath = "/models/gdsc_model.gltf";
const envPath = "/models/environment/acoustical_shell_1k.hdr";

function Logo() {
  const { scene, materials } = useGLTF(modelPath);
  const texture = useLoader(RGBELoader, envPath);

  useLayoutEffect(() => {
    for (let i = 0; i < 8; i++) {
      materials[`mat${i}`].blending = THREE.MultiplyBlending;
      materials[`mat${i}`].side = THREE.FrontSide;
      materials[`mat${i}`].emissiveIntensity = 0;
      materials[`mat${i}`].roughness = 0.1;
      materials[`mat${i}`].metalness = 0.5;
      materials[`mat${i}`].transparent = false;
    }
  }, [materials]);

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <mesh castShadow receiveShadow>
          <primitive
            object={scene}
            scale={0.4}
            position={[0, 0, 0]}
            receiveShadow
            castShadow
            envMap={texture}
            resolution={1024}
          />
        </mesh>
      )}
    </CubeCamera>
  );
}

function LogoCanvas() {
  const theme = useTheme();

  return (
    <StyledCanvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMappingExposure: 0.7,
        outputEncoding: THREE.sRGBEncoding
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <color attach="background" args={[theme.colors.bgPrimary]} />
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={35} />
        <Environment files={envPath} />
        <OrbitControls
          makeDefault
          autoRotate
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          enablePan={false}
        />
        <gridHelper
          args={[18, 5, "#D9D9D9", "#D9D9D9"]}
          position={[0, 2.8, 0]}
        />
        <gridHelper
          args={[18, 5, "#D9D9D9", "#D9D9D9"]}
          position={[0, -2.8, 0]}
        />
        <Logo />
      </Suspense>
      <Preload all />
    </StyledCanvas>
  );
}

export default LogoCanvas;
