import { useEffect } from "react";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
const WHITE = new THREE.MeshStandardMaterial({ color: "white" });

const TechIconCardExperience = ({ model }) => {
  const { scene } = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name !== "Interactive Developer") return;
    scene.traverse((child) => {
      if (child.isMesh && child.name === "Object_5") {
        child.material = WHITE;
      }
    });
  }, [scene, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
      <Environment preset="city" />

      {/* floating model */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;