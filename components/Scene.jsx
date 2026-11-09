"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";

function Orb({ light }) {
  const g = useRef();
  const width = useThree((s) => s.size.width);
  useFrame(({ pointer }, d) => {
    const m = width <= 900;
    const bx = m ? 0 : 1.9, by = m ? 1.1 : 0, s = m ? 0.62 : 1;
    g.current.scale.setScalar(s);
    g.current.rotation.y += d * 0.15;
    g.current.position.x += (bx + pointer.x * 0.7 - g.current.position.x) * 0.05;
    g.current.position.y += (by + pointer.y * 0.5 - g.current.position.y) * 0.05;
  });
  return (
    <group ref={g}>
      <Float speed={1.5} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.5, 12]} />
          <MeshDistortMaterial color={light ? "#7c5cff" : "#6d5df6"} distort={0.45} speed={1.6} roughness={0.15} metalness={0.6} />
        </mesh>
        <mesh scale={1.3}>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshBasicMaterial color={light ? "#7c3aed" : "#22d3ee"} wireframe transparent opacity={light ? 0.34 : 0.22} />
        </mesh>
      </Float>
    </group>
  );
}
function Particles({ light }) {
  const ref = useRef();
  const pos = useMemo(() => Float32Array.from({ length: 900 }, () => (Math.random() - 0.5) * 12), []);
  useFrame((_, d) => { ref.current.rotation.y += d * 0.03; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" array={pos} count={300} itemSize={3} /></bufferGeometry>
      <pointsMaterial size={light ? 0.055 : 0.03} color={light ? "#7c3aed" : "#a5f3fc"} sizeAttenuation />
    </points>
  );
}
export default function Scene() {
  const [light, setLight] = useState(false);
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setLight(root.dataset.theme === "light");
    read(); setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches);
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 1.5]} frameloop={reduce ? "demand" : "always"}>
      <ambientLight intensity={light ? 0.8 : 0.5} />
      <pointLight position={[4, 3, 3]} intensity={light ? 85 : 60} color="#22d3ee" />
      <pointLight position={[-4, -2, 2]} intensity={light ? 75 : 50} color="#8b5cf6" />
      <Orb light={light} /><Particles light={light} />
    </Canvas>
  );
}
