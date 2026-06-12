import * as THREE from "three";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";

RectAreaLightUniformsLib.init();

/* stable instance — never recreated on re-render */
const rectLight = new THREE.RectAreaLight("#ff6a00", 8, 3, 2);

const Lights = () => (
  <>
    {/* key light — warm white lamp */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="#fff4e6"
    />

    {/* amber overhead fill */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={50}
      color="#ffb347"
    />

    {/* deep orange side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={70}
      color="#ff6a00"
    />

    {/* soft orange area light */}
    <primitive
      object={rectLight}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    {/* ground ember glow */}
    <pointLight position={[0, 1, 0]} intensity={12} color="#e85d04" />

    {/* warm back rim */}
    <pointLight position={[1, 2, -2]} intensity={10} color="#f48c06" />
  </>
);

export default Lights;