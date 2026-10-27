"use client";

import { useEffect, useRef } from "react";
import { BadgeCheck, Bell, PhoneCall, type LucideIcon } from "lucide-react";
import Device from "./Device";
import { HomeScreen, VibesScreen, SCREEN_LABELS } from "./AppScreens";

type Float = {
  icon?: LucideIcon;
  live?: boolean;
  c: string;
  title: string;
  sub: string;
  pos: string;
  depth: number;
  delay: string;
};

/* What happens after a tap, told by the cards around the phones */
const FLOATS: Float[] = [
  {
    icon: PhoneCall,
    c: "#FF6B35",
    title: "We'll call you back",
    sub: "Within 4–6 working hours",
    pos: "left-0 top-[40%] sm:left-[2%] lg:left-[-8%] lg:top-[42%]",
    depth: 26,
    delay: "0s",
  },
  {
    live: true,
    c: "#12B3A0",
    title: "In Progress",
    sub: "Your hoarding is going up",
    pos: "right-0 top-[54%] sm:right-[4%] lg:right-[-2%] lg:top-[58%]",
    depth: 32,
    delay: "0.8s",
  },
  {
    icon: BadgeCheck,
    c: "#0EA97A",
    title: "Quote approved",
    sub: "Work starts on your yes",
    pos: "hidden sm:block left-[4%] bottom-[6%] lg:left-[-2%] lg:bottom-[8%]",
    depth: 20,
    delay: "1.6s",
  },
];

export default function HeroStage() {
  const root = useRef<HTMLDivElement>(null);

  // Layers drift against the cursor at different depths
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const ok = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!ok) return;

    const layers = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      for (const layer of layers) {
        const d = Number(layer.dataset.depth);
        layer.style.transform = `translate3d(${cx * d}px, ${cy * d}px, 0)`;
      }
      const settled = Math.abs(tx - cx) < 0.001 && Math.abs(ty - cy) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * -1;
      ty = (e.clientY / window.innerHeight - 0.5) * -1;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={root}
      className="relative w-full mx-auto mt-12 sm:mt-14 lg:mt-0 max-w-[560px] h-[470px] sm:h-[560px] lg:h-[640px] rise"
      style={{ animationDelay: "0.4s" }}
    >
      {/* Soft halo behind the phones */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(95,37,159,0.24), rgba(255,107,53,0.12) 45%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Lasan Vibes, behind and to the right */}
      <div className="absolute left-1/2 top-1/2 translate-x-[-4%] -translate-y-[46%]">
        <div data-depth="6">
          <Device
            label={SCREEN_LABELS.vibes}
            className="[--s:0.46] sm:[--s:0.56] lg:[--s:0.62] rotate-[7deg] opacity-95"
          >
            <VibesScreen />
          </Device>
        </div>
      </div>

      {/* Home, in front */}
      <div className="absolute left-1/2 top-1/2 -translate-x-[86%] sm:-translate-x-[80%] -translate-y-1/2">
        <div data-depth="12">
          <Device
            label={SCREEN_LABELS.home}
            className="[--s:0.56] sm:[--s:0.66] lg:[--s:0.76] -rotate-[3deg]"
          >
            <HomeScreen />
          </Device>
        </div>
      </div>

      {/* Cards around them */}
      {FLOATS.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            data-depth={f.depth}
            className={`absolute z-10 ${f.pos}`}
            aria-hidden
          >
            <div
              className="floaty glass rounded-2xl pl-2.5 pr-4 py-2.5 flex items-center gap-3"
              style={
                {
                  animationDelay: f.delay,
                  "--tilt": "0deg",
                } as React.CSSProperties
              }
            >
              <span
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `color-mix(in srgb, ${f.c} 14%, #fff)`,
                  color: f.c,
                }}
              >
                {f.live ? (
                  <span className="live-dot" />
                ) : (
                  Icon && <Icon size={18} strokeWidth={2} />
                )}
              </span>
              <span className="text-left leading-tight">
                <span className="block text-[12.5px] sm:text-[13.5px] font-bold">
                  {f.title}
                </span>
                <span className="block text-[11px] sm:text-[12px] mt-0.5 text-[color:var(--muted)]">
                  {f.sub}
                </span>
              </span>
            </div>
          </div>
        );
      })}

      {/* A notification sliding in at the top */}
      <div
        data-depth="36"
        aria-hidden
        className="absolute z-10 right-0 top-[2%] sm:right-[2%] lg:right-[-6%] lg:top-[6%]"
      >
        <div
          className="floaty glass rounded-2xl px-3 py-2.5 flex items-center gap-2.5 max-w-[250px]"
          style={{ animationDelay: "0.4s", "--tilt": "0deg" } as React.CSSProperties}
        >
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: "#5F259F" }}>
            <Bell size={15} />
          </span>
          <span className="leading-tight">
            <span className="block text-[12px] font-bold">Lasan Mart · now</span>
            <span className="block text-[11.5px] text-[color:var(--muted)] mt-0.5">
              Your request is now Contacted
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
