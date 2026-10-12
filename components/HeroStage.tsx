"use client";

import { useEffect, useRef } from "react";
import {
  BadgeCheck,
  Camera,
  ChartLine,
  Heart,
  Laptop,
  Megaphone,
  MessageCircle,
  Newspaper,
  Play,
  Signpost,
  Smartphone,
  Star,
  type LucideIcon,
} from "lucide-react";
import LoopVideo from "./LoopVideo";

/* Services that circle the phone, in the app's tile colours */
const ORBIT: [LucideIcon, string, string][] = [
  [Signpost, "#E63946", "Hoardings"],
  [Smartphone, "#C13584", "Social media"],
  [Star, "#F2542D", "Influencers"],
  [Camera, "#E8AE00", "Shoots"],
  [Laptop, "#2D6CDF", "Websites"],
  [MessageCircle, "#25D366", "WhatsApp"],
  [Newspaper, "#495057", "Print"],
  [ChartLine, "#7B2FF7", "SEO & Ads"],
];

/**
 * One copy of the ring. Drawn twice, clipped to its far and near
 * halves, so icons pass behind the phone at the back and in front of
 * it at the front. Both copies share the same animation clock.
 */
function OrbitRing({ half }: { half: "back" | "front" }) {
  return (
    <div
      aria-hidden
      className="orbit-clip"
      style={{
        clipPath: half === "back" ? "inset(0 0 50% 0)" : "inset(50% 0 0 0)",
      }}
    >
      <div className="orbit">
        <div className="orbit-ring">
          {ORBIT.map(([Icon, c, label], i) => (
            <div
              key={label}
              className="orbit-item"
              style={{ "--a": `${(360 / ORBIT.length) * i}deg` } as React.CSSProperties}
            >
              <div className="orbit-face">
                <span
                  className="orbit-bubble"
                  style={{ color: c }}
                  title={label}
                >
                  <Icon strokeWidth={2} className="w-[46%] h-[46%]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

/* A request's life, told by the cards around the phone */
const FLOATS: Float[] = [
  {
    icon: Megaphone,
    c: "#FF6B35",
    title: "New request",
    sub: "Hoardings · Tirupati",
    pos: "left-[0%] top-[8%] sm:left-[4%] sm:top-[12%] lg:left-[-3%] lg:top-[34%]",
    depth: 26,
    delay: "0s",
  },
  {
    icon: Star,
    c: "#6D3BF5",
    title: "Creator matched",
    sub: "Food · City page",
    pos: "hidden sm:block right-[3%] top-[6%] lg:right-[-2%] lg:top-[10%]",
    depth: 18,
    delay: "1.3s",
  },
  {
    live: true,
    c: "#12B3A0",
    title: "In Progress",
    sub: "Our partner is on it",
    pos: "right-[0%] top-[46%] sm:top-auto sm:right-[6%] sm:bottom-[22%] lg:right-[-3%] lg:bottom-[30%]",
    depth: 32,
    delay: "0.6s",
  },
  {
    icon: BadgeCheck,
    c: "#0EA97A",
    title: "Quote approved",
    sub: "Work starts on your yes",
    pos: "hidden sm:block left-[7%] bottom-[10%] lg:left-[2%] lg:bottom-[1%]",
    depth: 22,
    delay: "2s",
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
      className="relative w-full mx-auto mt-14 sm:mt-16 lg:mt-0 max-w-4xl h-[440px] sm:h-[540px] lg:h-[580px] rise"
      style={{ animationDelay: "0.55s" }}
    >
      {/* Soft halo behind the phone */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(109,59,245,0.22), rgba(255,107,53,0.12) 45%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <OrbitRing half="back" />

      {/* The phone */}
      <div className="absolute z-[1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div data-depth="10">
          <div className="phone w-[200px] sm:w-[248px] -rotate-[4deg]">
            <div className="phone-screen">
              <LoopVideo
                src="/media/hero-reel.mp4"
                poster="/media/hero-reel.jpg"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />

              <span className="absolute top-9 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-bold text-white glass-dark">
                <Play size={10} fill="#fff" strokeWidth={0} />
                LASAN VIBES
              </span>

              <div className="absolute right-2.5 bottom-20 flex flex-col items-center gap-1 text-white">
                <span className="w-9 h-9 rounded-full glass-dark flex items-center justify-center">
                  <Heart size={16} fill="#FF6B35" strokeWidth={0} />
                </span>
                <span className="text-[10px] font-semibold">Like</span>
              </div>

              <div className="absolute left-3 right-12 bottom-4 text-white">
                <div className="flex items-center gap-2">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{
                      background: "linear-gradient(135deg,#FF8A3D,#6D3BF5)",
                    }}
                  >
                    N
                  </span>
                  <span className="text-[12px] font-semibold">
                    noodle_house
                  </span>
                </div>
                <p className="text-[11.5px] mt-1.5 leading-snug text-white/85">
                  Our new ramen bowls, shot this morning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <OrbitRing half="front" />
      </div>

      {/* Cards around it */}
      {FLOATS.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.title}
            data-depth={f.depth}
            className={`absolute z-10 ${f.pos}`}
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
    </div>
  );
}
