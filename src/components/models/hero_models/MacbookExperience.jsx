import { Suspense, useState, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import { Macbook } from "./Macbook.jsx";

/* mute/unmute icon toggle */
const MuteButton = ({ muted, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={muted ? "Unmute video" : "Mute video"}
    className="absolute bottom-[-25px] right-10 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-black/50 backdrop-blur-md transition-colors duration-200 hover:bg-white/15 cursor-pointer"
  >
    {muted ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
        <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )}
  </button>
);

const INTERACTION_TIMEOUT = 1500;

const MacbookExperience = () => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [muted, setMuted] = useState(true);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

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
        <Canvas
          className="absolute inset-0"
          camera={{ position: [3, 0.8, 3.2], fov: 18 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={4.5} />
          <directionalLight position={[-1, -1, -3]} intensity={0.04} color="#ffffff" />
          <directionalLight position={[-1.7, 1.3, -2]} intensity={0.06} color="#ff4040" />

          <Suspense fallback={null}>
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
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            onEnd={handleInteractionEnd}
          />
        </Canvas>

        <MuteButton muted={muted} onToggle={toggleMute} />
      </div>
    </div>
  );
};

export default MacbookExperience;