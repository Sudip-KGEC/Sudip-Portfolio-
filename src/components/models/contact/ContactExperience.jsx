import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { Room } from "./Room.jsx";
import Lights from "./Lights.jsx";
import RoomSkeleton from "../../RoomSkeleton.jsx";

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div className="relative w-full h-full">
      <Suspense fallback={<RoomSkeleton />}>
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

          <group
            scale={isMobile ? 1.3 : 0.9}
            position={[0, -2.5, 0]}
            rotation={[0, -Math.PI / 3, 0]}
          >
            <Room />
          </group>
          
          <EffectComposer>
            <Bloom 
              mipmapBlur
              luminanceThreshold={1.0} 
              intensity={2.0}
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ContactExperience;