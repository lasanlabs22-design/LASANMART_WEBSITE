"use client";

import { useEffect, useRef, useState } from "react";
import LoopVideo from "./LoopVideo";
import {
  Bell,
  Check,
  ChevronLeft,
  Phone,
  PhoneOff,
  Signpost,
  ThumbsDown,
  ThumbsUp,
  Meh,
} from "lucide-react";

/* Status words and colours as MyRequestsScreen in the app uses them */
const STATUS = {
  received: { label: "Received", c: "#3A86FF" },
  contacted: { label: "Contacted", c: "#E8AE00" },
  progress: { label: "In Progress", c: "#12B3A0" },
  done: { label: "Completed", c: "#767676" },
};

const STEPS = [
  {
    tag: "Step 1",
    c: "#FF6B35",
    title: "Tell us what you need",
    body: "Pick a service, your sector, a rough budget and when you need it, or describe it in your own words. We verify your number once, so only you can see your requests.",
  },
  {
    tag: "Received → Contacted",
    c: STATUS.contacted.c,
    title: "We call you back",
    body: "Our team reads every request and calls within 4–6 working hours to talk through options and costs. Nothing is booked until you say yes.",
  },
  {
    tag: "In Progress",
    c: STATUS.progress.c,
    title: "A verified partner gets to work",
    body: "You see when they start and when they finish. Your phone buzzes at every change, and we stay in the middle throughout.",
  },
  {
    tag: "Completed",
    c: "#0EA97A",
    title: "Tell us how it went",
    body: "One tap: went well, it was okay, or not good. Only our team sees it, and it decides who gets your next job.",
  },
];

export default function RequestJourney() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Which step we're on follows how far the section has scrolled
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = root.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const p = travel > 0 ? Math.min(Math.max(-r.top / travel, 0), 0.999) : 0;
      setActive(Math.floor(p * STEPS.length));
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

  // Tapping a step scrolls to the point where it takes over
  const goTo = (i: number) => {
    const el = root.current;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + travel * ((i + 0.5) / STEPS.length),
      behavior: "smooth",
    });
  };

  return (
    <div ref={root} className="relative" style={{ height: `${STEPS.length * 90}vh` }}>
      <div className="sticky top-[72px] sm:top-[10vh] h-[calc(100dvh-80px)] sm:h-[80vh] flex flex-col md:grid md:grid-cols-[1fr_auto] md:items-center gap-5 md:gap-14 py-4">
        {/* The story */}
        <div className="order-2 md:order-1">
          {/* Progress rail */}
          <div className="flex md:hidden justify-center gap-2 mb-4">
            {STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show step ${i + 1}: ${s.title}`}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 32 : 12,
                  background: i <= active ? STEPS[active].c : "rgba(20,16,46,0.15)",
                }}
              />
            ))}
          </div>

          <ol className="relative space-y-2 md:space-y-3">
            {/* Rail behind the step numbers, filling as you go */}
            <span
              aria-hidden
              className="hidden md:block absolute left-[29px] top-8 bottom-8 w-[2px] rounded-full bg-[var(--line)]"
            >
              <span
                className="block w-full rounded-full transition-all duration-700 ease-out"
                style={{
                  height: `${(active / (STEPS.length - 1)) * 100}%`,
                  background: "linear-gradient(#FF6B35, #12B3A0, #0EA97A)",
                }}
              />
            </span>
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.title} className={on ? "" : "hidden md:block"}>
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={on ? "step" : undefined}
                    className="relative w-full text-left rounded-2xl p-4 md:p-5 md:pl-14 transition-all duration-500"
                    style={{
                      background: on ? "#fff" : "transparent",
                      boxShadow: on ? "0 18px 44px rgba(20,16,46,0.09)" : "none",
                      border: `1px solid ${on ? "var(--line)" : "transparent"}`,
                      opacity: on ? 1 : 0.45,
                    }}
                  >
                    <span
                      className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: s.c }}
                    >
                      <span
                        className="w-5 h-5 md:absolute md:left-5 md:top-5 rounded-full flex items-center justify-center text-white text-[10.5px] ring-4 ring-[var(--paper)]"
                        style={{ background: i < active ? "#0EA97A" : s.c }}
                      >
                        {i < active ? <Check size={11} strokeWidth={3.5} /> : i + 1}
                      </span>
                      {s.tag}
                    </span>
                    <span className="block display-md text-[19px] md:text-[21px] mt-2">
                      {s.title}
                    </span>
                    <span
                      className={`block text-[14px] leading-relaxed mt-1.5 transition-all duration-500 ${on ? "" : "md:max-h-0 md:overflow-hidden md:mt-0"}`}
                      style={{ color: "var(--muted)" }}
                    >
                      {s.body}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* The phone, one screen per step */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="phone w-[210px] sm:w-[230px] md:w-[270px]">
            <div className="phone-screen bg-[#F6F4FB]!">
              {[Post, Called, Working, Done].map((Screen, i) => (
                <div
                  key={i}
                  aria-hidden={i !== active}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform:
                      i === active
                        ? "translateY(0) scale(1)"
                        : i < active
                          ? "translateY(-16px) scale(0.98)"
                          : "translateY(16px) scale(0.98)",
                  }}
                >
                  <Screen />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Screens, drawn like the app ---------- */

function Header({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 pt-9 pb-2.5 bg-white border-b border-[var(--line)]">
      <ChevronLeft size={15} />
      <span className="text-[12px] font-bold">{title}</span>
    </div>
  );
}

function Pill({ s }: { s: keyof typeof STATUS }) {
  const { label, c } = STATUS[s];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold"
      style={{ background: `color-mix(in srgb, ${c} 15%, #fff)`, color: c }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
      {label}
    </span>
  );
}

function RequestCard({ s, children }: { s: keyof typeof STATUS; children?: React.ReactNode }) {
  return (
    <div className="mx-3 mt-3 rounded-xl bg-white p-3 shadow-[0_4px_14px_rgba(20,16,46,0.06)]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#FDE8EA", color: "#E63946" }}
          >
            <Signpost size={14} />
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] font-bold">Hoarding near the bus stand</span>
            <span className="block text-[9.5px] text-[var(--muted)]">Hoardings · ₹25K–50K</span>
          </span>
        </div>
      </div>
      <div className="mt-2.5">
        <Pill s={s} />
      </div>
      {children}
    </div>
  );
}

function Toast({ text }: { text: string }) {
  return (
    <div className="mx-2.5 mt-2.5 rounded-xl glass flex items-center gap-2 px-2.5 py-2">
      <span className="w-6 h-6 rounded-md flex items-center justify-center bg-[var(--violet)] text-white">
        <Bell size={12} />
      </span>
      <span className="leading-tight">
        <span className="block text-[9.5px] font-bold">Lasan Mart</span>
        <span className="block text-[9.5px] text-[var(--muted)]">{text}</span>
      </span>
    </div>
  );
}

function Chip({ on, children }: { on?: boolean; children: React.ReactNode }) {
  return (
    <span
      className="px-2 py-1 rounded-lg text-[9.5px] font-semibold border"
      style={{
        background: on ? "var(--violet)" : "#fff",
        color: on ? "#fff" : "var(--ink)",
        borderColor: on ? "var(--violet)" : "var(--line)",
      }}
    >
      {children}
    </span>
  );
}

function Post() {
  return (
    <div className="h-full flex flex-col">
      <Header title="Post a Request" />
      <div className="px-3 pt-3 space-y-3 text-[10px]">
        <div>
          <p className="font-bold text-[var(--muted)] uppercase tracking-wide text-[8.5px]">Service</p>
          <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-white p-2 border border-[var(--line)]">
            <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#FDE8EA", color: "#E63946" }}>
              <Signpost size={12} />
            </span>
            <span className="font-semibold">Hoardings</span>
          </div>
        </div>
        <div>
          <p className="font-bold text-[var(--muted)] uppercase tracking-wide text-[8.5px]">Your sector</p>
          <div className="mt-1.5 rounded-lg bg-white p-2 border border-[var(--line)] font-semibold">
            Restaurants &amp; Cafes
          </div>
        </div>
        <div>
          <p className="font-bold text-[var(--muted)] uppercase tracking-wide text-[8.5px]">Approximate budget</p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Chip>Under ₹25K</Chip>
            <Chip on>₹25K–50K</Chip>
            <Chip>₹50K–1L</Chip>
          </div>
        </div>
        <div>
          <p className="font-bold text-[var(--muted)] uppercase tracking-wide text-[8.5px]">Timeline</p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <Chip>ASAP</Chip>
            <Chip on>This month</Chip>
            <Chip>Flexible</Chip>
          </div>
        </div>
      </div>
      <div className="mt-auto p-3">
        <div className="rounded-xl py-2.5 text-center text-white text-[11px] font-bold bg-gradient-to-br from-[#FF8A3D] to-[#F2542D] shadow-[0_8px_18px_rgba(255,107,53,0.35)]">
          Submit request
        </div>
      </div>
    </div>
  );
}

function Called() {
  return (
    <div className="h-full flex flex-col">
      <Header title="My Requests" />
      <Toast text="Your request is now Contacted" />
      <RequestCard s="contacted" />
      <div className="mt-auto m-3 rounded-2xl p-3 text-white bg-[var(--ink)] shadow-[0_14px_30px_rgba(20,16,46,0.35)]">
        <p className="text-[9px] text-white/60">Incoming call</p>
        <p className="text-[12.5px] font-bold mt-0.5">Lasan Mart team</p>
        <div className="flex justify-between mt-3">
          <span className="w-9 h-9 rounded-full bg-[#E63946] flex items-center justify-center">
            <PhoneOff size={15} />
          </span>
          <span className="w-9 h-9 rounded-full bg-[#0EA97A] flex items-center justify-center animate-pulse">
            <Phone size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

function Working() {
  return (
    <div className="h-full flex flex-col">
      <Header title="My Requests" />
      <Toast text="Your request is now In Progress" />
      <RequestCard s="progress">
        <div className="mt-2.5 flex items-center gap-1.5 text-[9.5px] font-semibold" style={{ color: STATUS.progress.c }}>
          <span className="live-dot scale-75" />
          Our partner is working on this now
        </div>
      </RequestCard>
      <div className="mx-3 mt-3 rounded-xl bg-white p-2.5">
        <p className="text-[9px] font-bold text-[var(--muted)] uppercase tracking-wide">
          Photo proof from the partner
        </p>
        <div className="relative mt-1.5 rounded-lg overflow-hidden aspect-video">
          <LoopVideo
            src="/media/svc-outdoor.mp4"
            poster="/media/svc-outdoor.jpg"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <div className="mx-3 mt-3 rounded-xl bg-white p-3 space-y-2.5">
        {(["received", "contacted", "progress"] as const).map((k, i) => (
          <div key={k} className="flex items-center gap-2 text-[10px]">
            <span
              className="w-4 h-4 rounded-full flex items-center justify-center text-white"
              style={{ background: i < 2 ? "#0EA97A" : STATUS[k].c }}
            >
              {i < 2 ? <Check size={9} strokeWidth={3.5} /> : <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </span>
            <span className={i < 2 ? "text-[var(--muted)]" : "font-bold"}>{STATUS[k].label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Done() {
  return (
    <div className="h-full flex flex-col">
      <Header title="My Requests" />
      <RequestCard s="done">
        <div className="mt-2.5 flex items-center gap-1.5 text-[9.5px] font-semibold text-[#0EA97A]">
          <Check size={11} strokeWidth={3} />
          Our partner has finished this
        </div>
      </RequestCard>
      <div className="mt-auto rounded-t-2xl bg-white p-3.5 shadow-[0_-10px_30px_rgba(20,16,46,0.1)]">
        <div className="w-8 h-1 rounded-full bg-[var(--line)] mx-auto" />
        <p className="text-[12px] font-bold mt-2.5">How did it go?</p>
        <p className="text-[9.5px] text-[var(--muted)]">Only our team sees this</p>
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {[
            { icon: ThumbsUp, label: "Went well", on: true },
            { icon: Meh, label: "It was okay" },
            { icon: ThumbsDown, label: "Not good" },
          ].map(({ icon: Icon, label, on }) => (
            <span
              key={label}
              className="rounded-xl py-2 flex flex-col items-center gap-1 text-[8.5px] font-semibold border"
              style={{
                background: on ? "rgba(14,169,122,0.1)" : "#fff",
                borderColor: on ? "#0EA97A" : "var(--line)",
                color: on ? "#0B8457" : "var(--ink)",
              }}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
