import { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const MODEL = "/models/macbook_pro-transformed.glb";

/* singleton video — shared across re-mounts */
let sharedVideo = null;
const getSharedVideo = () => {
  if (sharedVideo) return sharedVideo;
  sharedVideo = Object.assign(document.createElement("video"), {
    src: "/videos/heroVideo.mp4",
    loop: true,
    muted: true,
    playsInline: true,
    autoplay: true,
    crossOrigin: "anonymous",
    preload: "auto",
  });
  return sharedVideo;
};

export function Macbook({ isInteracting, muted, sectionRef, ...props }) {
  const { nodes, materials } = useGLTF(MODEL);
  const groupRef = useRef();
  const video = useMemo(getSharedVideo, []);

  const videoTexture = useMemo(() => {
    const t = new THREE.VideoTexture(video);
    t.flipY = true;
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.generateMipmaps = false;
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }, [video]);

  /* initial play + texture cleanup */
  useEffect(() => {
    video.play().catch(() => {});
    return () => videoTexture.dispose();
  }, [video, videoTexture]);

  /* sync mute */
  useEffect(() => {
    video.muted = muted ?? true;
  }, [muted, video]);

  /* pause when off-screen */
  useEffect(() => {
    const target = sectionRef?.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [sectionRef, video]);

  /* idle sway */
  useFrame(({ clock }) => {
    if (!groupRef.current || isInteracting) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.2;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry}  material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Object_9.geometry}  material={materials["Material.006"]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.PaletteMaterial003} />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.PaletteMaterial004}
        position={[-0.12, -0.06, -0.198]}
        rotation={[-1.224, 0, 0]}
        scale={[1, 1, 0.999]}
      />
      <mesh
        geometry={nodes.Object_25.geometry}
        position={[0, 0.116, -0.153]}
        rotation={[1.318, 0, 0]}
        scale={[0.166, 0.165, 0.104]}
      >
        <meshBasicMaterial map={videoTexture} toneMapped={false} />
      </mesh>
    </group>
  );
}

useGLTF.preload(MODEL);