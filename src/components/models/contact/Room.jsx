import { useMemo, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH   = "/models/optimized-room.glb";
const TEXTURE_PATH = "/images/textures/mat1.png";

/* shared, non-reactive materials that never change */
const STATIC_MAT = {
  radiator: new THREE.MeshPhongMaterial({ color: "#fff" }),
  comp:     new THREE.MeshStandardMaterial({ color: "#1a1a1a" }),
  chair:    new THREE.MeshPhongMaterial({ color: "#1a0a00" }),
};

export function Room(props) {
  const { nodes, materials } = useGLTF(MODEL_PATH);
  const matcapTexture = useTexture(TEXTURE_PATH);

  /* only dynamic mats that depend on a loaded asset go here */
  const mat = useMemo(() => ({
    curtain: new THREE.MeshPhongMaterial({ color: "#ff6a00" }),   // orange
    body:    new THREE.MeshPhongMaterial({ map: matcapTexture }),
    table:   new THREE.MeshPhongMaterial({ color: "#582f0e" }),
    pillow:  new THREE.MeshPhongMaterial({ color: "#ff8c00" }),   // amber orange
    screen:  new THREE.MeshStandardMaterial({
      color: "#ffffff",
      emissive: "#ff6a00",          // orange screen glow
      emissiveIntensity: 4.0,
      toneMapped: false,
    }),
  }), [matcapTexture]);

  useEffect(() => {
    return () => Object.values(mat).forEach((m) => m.dispose());
  }, [mat]);

  const { blinn1: b, phong1: p } = materials;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes._________6_blinn1_0.geometry}   material={mat.curtain} />
      <mesh geometry={nodes.body1_blinn1_0.geometry}         material={mat.body} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry}         material={mat.table} />
      <mesh geometry={nodes.chair_body_blinn1_0.geometry}    material={STATIC_MAT.chair} />
      <mesh geometry={nodes.comp_blinn1_0.geometry}          material={STATIC_MAT.comp} />
      <mesh geometry={nodes.emis_lambert1_0.geometry}        material={mat.screen} />
      <mesh geometry={nodes.handls_blinn1_0.geometry}        material={b} />
      <mesh geometry={nodes.keyboard_blinn1_0.geometry}      material={b} />
      <mesh geometry={nodes.kovrik_blinn1_0.geometry}        material={b} />
      <mesh geometry={nodes.lamp_bl_blinn1_0.geometry}       material={b} />
      <mesh geometry={nodes.lamp_white_blinn1_0.geometry}    material={b} />
      <mesh geometry={nodes.miuse_blinn1_0.geometry}         material={b} />
      <mesh geometry={nodes.monitor2_blinn1_0.geometry}      material={b} />
      <mesh geometry={nodes.monitor3_blinn1_0.geometry}      material={b} />
      <mesh geometry={nodes.pCylinder5_blinn1_0.geometry}    material={b} />
      <mesh geometry={nodes.pillows_blinn1_0.geometry}       material={mat.pillow} />
      <mesh geometry={nodes.polySurface53_blinn1_0.geometry} material={b} />
      <mesh geometry={nodes.radiator_blinn1_0.geometry}      material={STATIC_MAT.radiator} />
      <mesh geometry={nodes.radiator_blinn1_0001.geometry}   material={b} />
      <mesh geometry={nodes.railing_blinn1_0.geometry}       material={b} />
      <mesh geometry={nodes.red_bttns_blinn1_0.geometry}     material={b} />
      <mesh geometry={nodes.red_vac_blinn1_0.geometry}       material={b} />
      <mesh geometry={nodes.stylus_blinn1_0.geometry}        material={b} />
      <mesh geometry={nodes.table_blinn1_0.geometry}         material={mat.table} />
      <mesh geometry={nodes.tablet_blinn1_0.geometry}        material={b} />
      <mesh geometry={nodes.triangle_blinn1_0.geometry}      material={b} />
      <mesh geometry={nodes.vac_black_blinn1_0.geometry}     material={b} />
      <mesh geometry={nodes.vacuum1_blinn1_0.geometry}       material={b} />
      <mesh geometry={nodes.vacuumgrey_blinn1_0.geometry}    material={b} />
      <mesh geometry={nodes.vires_blinn1_0.geometry}         material={b} />
      <mesh geometry={nodes.window_blinn1_0.geometry}        material={b} />
      <mesh geometry={nodes.window4_phong1_0.geometry}       material={p} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);