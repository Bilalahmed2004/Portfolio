"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
const line = (i) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.7, ease: "easeOut" } });

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true"><Scene /></div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 md:justify-center md:px-6 md:pb-0">
        <motion.p {...line(1)} className="mb-4 text-mist">{profile.role} in {profile.city}</motion.p>
        <motion.h1 {...line(2)} className="max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          I'm Bilal. I build full stack web apps that <span className="grad">feel fast and clear</span> to use.
        </motion.h1>
        <motion.p {...line(3)} className="mt-6 max-w-xl text-base text-mist sm:text-lg">
          React, Node.js, Express and MongoDB, delivered to your requirements. Open for freelance projects and junior developer roles.
        </motion.p>
        <motion.div {...line(4)} className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="btn-main rounded-full bg-gradient-to-r from-cyan to-violet px-7 py-3 font-semibold text-onacc transition hover:scale-105">See my projects</a>
          <a href="#contact" className="btn-ghost rounded-full border border-fg/20 px-7 py-3 font-semibold transition hover:border-cyan hover:text-cyan">Hire me</a>
        </motion.div>
      </div>
    </section>
  );
}
