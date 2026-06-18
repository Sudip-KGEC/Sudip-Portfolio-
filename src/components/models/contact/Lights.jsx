import * as THREE from "three";

const Lights = () => (
  <>
    {/* soft ambient fill so nothing is fully black */}
    <ambientLight intensity={0.4} color="#3a2a1a" />

    {/* warm key light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.3}
      penumbra={0.5}
      intensity={80}
      color="#ffb347"
    />

    {/* orange ember glow from below */}
    <pointLight position={[0, 1, 0]} intensity={15} color="#ff6a00" />
  </>
);

export default Lights;