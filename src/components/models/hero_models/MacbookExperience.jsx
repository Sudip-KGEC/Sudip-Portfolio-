import { Suspense, useState, useRef, useCallback, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Macbook } from "./Macbook.jsx";
import LaptopSkeleton from "../../LaptopSkeleton.jsx";
import MuteButton from "../../MuteButton.jsx";

const INTERACTION_TIMEOUT = 1500;

const MacbookExperience = () => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleInteractionStart = useCallback(() => {
    setIsInteracting(true);
    clearTimeout(timeoutRef.current);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsInteracting(false), INTERACTION_TIMEOUT);
  }, []);

  const toggleMute = useCallback(() => setMuted((p) => !p), []);

  return (
    <div ref={sectionRef} className="w-full h-full ml-6 md:ml-12 lg:ml-16 rounded-lg">
      <div
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        onPointerDown={handleInteractionStart}
        onTouchStart={handleInteractionStart}
      >
        <Suspense fallback={<LaptopSkeleton />}>
          <Canvas
            className="absolute inset-0"
            camera={{ position: [3, 0.8, 3.2], fov: 18 }}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
            frameloop={isVisible ? "always" : "never"}
          >
            <ambientLight intensity={4.5} />
            <directionalLight position={[-1, -1, -3]} intensity={0.04} color="#ffffff" />
            <directionalLight position={[-1.7, 1.3, -2]} intensity={0.06} color="#ff4040" />

            <Center>
              <group rotation={[0.08, 0.6, -0.1]}>
                <Macbook
                  scale={3}
                  isInteracting={isInteracting}
                  muted={muted}
                  sectionRef={sectionRef}
                />
              </group>
            </Center>

            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
              onEnd={handleInteractionEnd}
            />
          </Canvas>
        </Suspense>

        <MuteButton muted={muted} onToggle={toggleMute} />
      </div>
    </div>
  );
};

export default MacbookExperience;