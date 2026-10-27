"use client";

import { useEffect, useRef, useState } from "react";
import {
  Camera,
  FileText,
  LayoutGrid,
  Lightbulb,
  Play,
  type LucideIcon,
} from "lucide-react";
import Device from "./Device";
import {
  HomeScreen,
  IdeasScreen,
  QuoteScreen,
  SCREEN_LABELS,
  TalentScreen,
  VibesScreen,
} from "./AppScreens";

type Stop = {
  key: "home" | "ideas" | "talent" | "vibes" | "quote";
  tab: string;
  icon: LucideIcon;
  c: string;
  title: string;
  body: string;
};

const STOPS: Stop[] = [
  {
    key: "home",
    tab: "Home",
    icon: LayoutGrid,
    c: "#5F259F",
    title: "Every service on one screen",
    body: "Thirty online and offline services, laid out like the apps on your phone. Tap Hoardings, Social Media or WhatsApp Automation, say what you need, and send it.",
  },
  {
    key: "ideas",
    tab: "Business Ideas",
    icon: Lightbulb,
    c: "#E8AE00",
    title: "A playbook for your sector",
    body: "Choose from twenty sectors, from shops and restaurants to clinics and coaching centres. See what works, which services to start with and what to spend, then ask for help in one tap.",
  },
  {
    key: "talent",
    tab: "Hire talent",
    icon: Camera,
    c: "#3A86FF",
    title: "Photographers, editors and developers",
    body: "Need a product shoot, a reel edited or a website built? Pick the skills, describe the job, and we come back with the right person and a price. Influencers too, by city and category.",
  },
  {
    key: "vibes",
    tab: "Lasan Vibes",
    icon: Play,
    c: "#C13584",
    title: "See what local brands are posting",
    body: "A short-video feed of shoots, launches and offers from businesses near you. Once our team approves you, post your own videos of up to 90 seconds.",
  },
  {
    key: "quote",
    tab: "Free tools",
    icon: FileText,
    c: "#FF6B35",
    title: "Send a quotation in a minute",
    body: "A free quotation maker with your logo as a watermark, line items, GST and a validity period, shared as a PDF on WhatsApp. Need staff attendance or a CRM? We build those for you.",
  },
];

const SCREENS = {
  home: HomeScreen,
  ideas: IdeasScreen,
  talent: TalentScreen,
  quote: QuoteScreen,
};

const DWELL = 6500;

export default function AppTour() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  // Autoplay stops for good once someone picks a screen themselves
  const [auto, setAuto] = useState(true);

  // Never counts as in view for reduced motion, so it never advances itself
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % STOPS.length), DWELL);
    return () => clearTimeout(t);
  }, [auto, inView, active]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };

  const stop = STOPS[active];
  const playing = auto && inView;

  return (
    <div
      ref={root}
      className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center mt-12 sm:mt-16"
    >
      {/* The phone */}
      <div className="lg:order-2 flex justify-center">
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full transition-colors duration-700"
            style={{
              background: `radial-gradient(circle, color-mix(in srgb, ${stop.c} 22%, transparent), transparent 68%)`,
            }}
          />
          <Device
            label={SCREEN_LABELS[stop.key]}
            className="[--s:0.7] sm:[--s:0.78] lg:[--s:0.82]"
          >
            {STOPS.map((s, i) => {
              const Screen = s.key === "vibes" ? null : SCREENS[s.key];
              return (
                <div
                  key={s.key}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform:
                      i === active
                        ? "none"
                        : i < active
                          ? "translateX(-6%)"
                          : "translateX(6%)",
                  }}
                >
                  {Screen ? <Screen /> : <VibesScreen active={i === active} />}
                </div>
              );
            })}
          </Device>
        </div>
      </div>

      {/* The stops */}
      <div className="lg:order-1">
        {/* Phones: a row of chips, then the words for the open one */}
        <div className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1 [scrollbar-width:none]">
            {STOPS.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => pick(i)}
                aria-pressed={i === active}
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13.5px] font-semibold border transition-colors"
                style={{
                  background: i === active ? "var(--ink)" : "#fff",
                  color: i === active ? "#fff" : "var(--ink)",
                  borderColor: i === active ? "var(--ink)" : "var(--line)",
                }}
              >
                <s.icon size={15} aria-hidden />
                {s.tab}
              </button>
            ))}
          </div>
          <div className="mt-6 text-center" aria-live="polite">
            <h3 className="display-md text-[22px]">{stop.title}</h3>
            <p
              className="mt-2.5 text-[15px] leading-relaxed max-w-md mx-auto"
              style={{ color: "var(--muted)" }}
            >
              {stop.body}
            </p>
          </div>
        </div>

        {/* Laptops and up: a list that opens the active stop */}
        <ol className="hidden lg:block space-y-2">
          {STOPS.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.key}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  aria-pressed={on}
                  className="relative w-full text-left rounded-2xl p-5 flex gap-4 overflow-hidden transition-all duration-500"
                  style={{
                    background: on ? "#fff" : "transparent",
                    boxShadow: on ? "0 18px 44px rgba(20,16,46,0.09)" : "none",
                    border: `1px solid ${on ? "var(--line)" : "transparent"}`,
                  }}
                >
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500"
                    style={{
                      background: on
                        ? s.c
                        : `color-mix(in srgb, ${s.c} 12%, #fff)`,
                      color: on ? "#fff" : s.c,
                    }}
                  >
                    <s.icon size={20} aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span
                      className="block text-[11.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: on ? s.c : "var(--muted)" }}
                    >
                      {s.tab}
                    </span>
                    <span
                      className="block display-md text-[20px] mt-1 transition-opacity"
                      style={{ opacity: on ? 1 : 0.55 }}
                    >
                      {s.title}
                    </span>
                    <span
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                    >
                      <span className="overflow-hidden">
                        <span
                          className="block text-[14.5px] leading-relaxed pt-2"
                          style={{ color: "var(--muted)" }}
                        >
                          {s.body}
                        </span>
                      </span>
                    </span>
                  </span>

                  {/* How long until the next stop */}
                  {on && playing && (
                    <span
                      key={active}
                      aria-hidden
                      className="absolute left-0 bottom-0 h-[3px] w-full origin-left"
                      style={{
                        background: s.c,
                        animation: `dotFill ${DWELL}ms linear both`,
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
