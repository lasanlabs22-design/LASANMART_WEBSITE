"use client";

import { useEffect, useState } from "react";
import StoreButton from "./StoreButton";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#freelancers", label: "Freelancers" },
  { href: "#vibes", label: "Lasan Vibes" },
  { href: "#plans", label: "Plans" },
  { href: "#hub", label: "Lasan Hub" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,253,249,0.86)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--line)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-[70px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#FF8A3D,#F2542D)" }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M17 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7.2 14.6 7 15a1 1 0 0 0 1 1h12v-2H8.4l1.1-2H17a2 2 0 0 0 1.8-1L22 5H6.2l-.9-2H2v2h2l3.6 7.6-1.4 2Z" />
            </svg>
          </div>
          <span className="display-md text-[16px] tracking-[0.14em]">
            LASAN MART
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg text-[14px] font-medium transition hover:bg-black/[0.04]"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block scale-90 origin-right">
          <StoreButton />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(20,16,46,0.05)" }}
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            {open ? (
              <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4Z" />
            ) : (
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-5 pb-5 rise"
          style={{ background: "rgba(255,253,249,0.98)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium border-b"
              style={{ borderColor: "var(--line)" }}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4">
            <StoreButton />
          </div>
        </div>
      )}
    </header>
  );
}
