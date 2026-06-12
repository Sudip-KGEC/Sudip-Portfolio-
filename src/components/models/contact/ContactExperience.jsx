import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Room } from "./Room.jsx";
import Lights from "./Lights.jsx";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
      <ambientLight intensity={0.2} color="#1a1a40" />
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
      />

      <Lights />

      <Suspense fallback={null}>
        <group
          scale={isMobile ? 0.5 : 0.9}
          position={[0, -2.5, 0]}
          rotation={[0, -Math.PI / 3, 0]}
        >
          <Room />
        </group>
        
        <EffectComposer>
          {/* A threshold of 1.0 means regular lights won't cause generic materials to bleed/glow */}
          <Bloom 
            mipmapBlur
            luminanceThreshold={1.0} 
            intensity={2.0}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;