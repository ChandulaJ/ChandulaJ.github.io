import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#a2d8f7"
          polygonOffset
          polygonOffsetFactor={-4}
          flatShading
        />
        {/* Adjusted position of Decal to align with cube's faces */}
        {/* Front face */}
        <Decal
          position={[0, 0, 0.51]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Back face */}
        <Decal
          position={[0, 0, -0.51]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Top face */}
        <Decal
          position={[0, 0.51, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Bottom face */}
        <Decal
          position={[0, -0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Right face */}
        <Decal
          position={[0.51, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Left face */}
        <Decal
          position={[-0.51, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
