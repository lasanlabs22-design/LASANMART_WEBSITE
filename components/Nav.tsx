"use client";

import { useEffect, useRef, useState } from "react";
import StoreButton from "./StoreButton";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#freelancers", label: "Freelancers" },
  { href: "#vibes", label: "Lasan Vibes" },
  { href: "#plans", label: "Plans" },
  { href: "#hub", label: "Lasan Mart Hub" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [pill, setPill] = useState<{ x: number; w: number } | null>(null);

  const progress = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Scroll state + progress bar. The bar is written straight to the DOM
  // so scrolling never triggers a React render.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Which section is in the middle band of the screen
  useEffect(() => {
    const sections = LINKS.map((l) =>
      document.querySelector<HTMLElement>(l.href),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    // Clear the highlight once we're above the first tracked section
    const first = sections[0];
    const onScroll = () => {
      if (first && window.scrollY + window.innerHeight * 0.5 < first.offsetTop) {
        setActive(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Slide the pill under the active link
  useEffect(() => {
    const measure = () => {
      const el = active ? linkRefs.current[active] : null;
      setPill(el ? { x: el.offsetLeft, w: el.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Mobile menu: Esc closes, page behind doesn't scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background:
          scrolled || open ? "rgba(255,253,249,0.86)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom:
          scrolled || open
            ? "1px solid var(--line)"
            : "1px solid transparent",
      }}
    >
      <div
        ref={progress}
        className="progress w-full"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-5 h-16 md:h-[70px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5" aria-label="Lasan Mart home">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#FF8A3D,#F2542D)" }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4" aria-hidden>
              <path d="M17 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM7.2 14.6 7 15a1 1 0 0 0 1 1h12v-2H8.4l1.1-2H17a2 2 0 0 0 1.8-1L22 5H6.2l-.9-2H2v2h2l3.6 7.6-1.4 2Z" />
            </svg>
          </div>
          <span className="display-md text-[15px] sm:text-[16px] tracking-[0.14em]">
            LASAN MART
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 relative">
          <span
            aria-hidden
            className="absolute top-0 bottom-0 left-0 rounded-lg nav-pill"
            style={{
              width: pill?.w ?? 0,
              transform: `translateX(${pill?.x ?? 0}px)`,
              opacity: pill ? 1 : 0,
            }}
          />
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              ref={(el) => {
                linkRefs.current[l.href] = el;
              }}
              aria-current={active === l.href ? "true" : undefined}
              className="relative px-4 py-2 rounded-lg text-[14px] font-medium transition-colors hover:bg-black/[0.04]"
              style={{
                color: active === l.href ? "var(--ink)" : "var(--muted)",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block scale-90 origin-right">
          <StoreButton />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(20,16,46,0.05)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
            {open ? (
              <path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4Z" />
            ) : (
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="md:hidden px-5 pb-6 max-h-[calc(100dvh-64px)] overflow-y-auto"
        >
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rise flex items-center justify-between py-3.5 text-[16px] font-medium border-b"
              style={{
                borderColor: "var(--line)",
                animationDelay: `${i * 0.04}s`,
                color: active === l.href ? "var(--violet-deep)" : "var(--ink)",
              }}
            >
              {l.label}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-30" aria-hidden>
                <path d="m10 17 5-5-5-5v10Z" />
              </svg>
            </a>
          ))}
          <div className="pt-5 rise" style={{ animationDelay: "0.22s" }}>
            <StoreButton />
          </div>
        </nav>
      )}
    </header>
  );
}
