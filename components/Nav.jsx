"use client";
import { useState } from "react";
const links = [["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]];
const ib = "grid h-10 w-10 place-items-center rounded-full border border-fg/25 transition hover:border-cyan hover:text-cyan";
const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    const n = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = n;
    try { localStorage.setItem("bt", n); } catch {}
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fg/10 bg-ink/80 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Main">
        <a href="#" className="font-display text-xl font-bold">Bilal<span className="grad">.</span></a>
        <ul className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col border-b border-fg/10 bg-ink px-4 pb-3 text-mist md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:text-sm`}>
          {links.map(([t, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block border-b border-fg/10 py-3.5 text-[17px] transition hover:text-cyan md:border-0 md:py-0 md:text-sm">{t}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5">
          <button type="button" onClick={toggle} className={ib} aria-label="Switch day and night theme">
            <svg {...svg} className="h-5 w-5 [[data-theme=light]_&]:hidden"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            <svg {...svg} className="hidden h-5 w-5 [[data-theme=light]_&]:block"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          </button>
          <button type="button" onClick={() => setOpen(!open)} className={`${ib} md:hidden`} aria-label="Open menu" aria-expanded={open}>
            <svg {...svg} className="h-5 w-5"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
