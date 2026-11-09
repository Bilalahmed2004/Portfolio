"use client";
import { useEffect, useRef, useState } from "react";
export default function Extras() {
  const bar = useRef(), dot = useRef(), ring = useRef();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const h = root.scrollHeight - innerHeight;
      bar.current.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
      setShow(scrollY > innerHeight * 0.6);
    };
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
    let raf, px = 0, py = 0, rx = 0, ry = 0;
    const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
    const move = (e) => {
      px = e.clientX; py = e.clientY;
      if (!root.classList.contains("cc")) { root.classList.add("cc"); rx = px; ry = py; }
      dot.current.style.transform = `translate3d(${px}px,${py}px,0)`;
    };
    const over = (e) => ring.current.classList.toggle("big", !!e.target.closest("a,button"));
    const leave = () => root.classList.remove("cc");
    const loop = () => {
      rx += (px - rx) * (rm ? 1 : 0.18); ry += (py - ry) * (rm ? 1 : 0.18);
      ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    if (fine) { addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerover", over); root.addEventListener("pointerleave", leave); loop(); }
    return () => {
      removeEventListener("scroll", onScroll); removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over); root.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf); root.classList.remove("cc");
    };
  }, []);
  return (
    <>
      <div id="cd" ref={dot} aria-hidden="true" /><div id="cr" ref={ring} aria-hidden="true" />
      <div ref={bar} className="fixed left-0 top-0 z-[60] h-[3px] w-0 bg-gradient-to-r from-cyan to-violet" />
      <button type="button" aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-4 right-4 z-30 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-onacc shadow-lg transition duration-300 md:bottom-5 md:right-5 md:h-14 md:w-14 ${show ? "opacity-100 hover:-translate-y-1" : "pointer-events-none translate-y-5 opacity-0"}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 20V5" /><path d="M5 11l7-7 7 7" /></svg>
      </button>
    </>
  );
}
