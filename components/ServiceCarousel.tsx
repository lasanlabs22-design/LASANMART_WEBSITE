"use client";

import { useRef, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
  gradient: string;
  accent: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Offline",
    title: "Hoardings & Outdoor",
    body: "The billboard on the road your customers drive every day. Site selection, printing, mounting and permissions — handled.",
    tags: ["Site scouting", "Design & print", "Permissions", "Photo proof"],
    gradient: "linear-gradient(150deg, #FF9A4D, #E63946)",
    accent: "#FFE0CC",
  },
  {
    eyebrow: "Online",
    title: "Social & Paid Ads",
    body: "Instagram, Facebook and Google, run properly. Content, targeting and budget managed month to month.",
    tags: [
      "Content calendar",
      "Paid targeting",
      "Monthly reports",
      "Lead tracking",
    ],
    gradient: "linear-gradient(150deg, #7C4DFF, #4B21C4)",
    accent: "#DCD0FF",
  },
  {
    eyebrow: "Creators",
    title: "Influencer Campaigns",
    body: "Forty-six local creators across fashion, food, fitness and city pages. Pick by budget, we handle the rest.",
    tags: [
      "46 creators",
      "Budget filters",
      "Rate transparency",
      "We negotiate",
    ],
    gradient: "linear-gradient(150deg, #FFC529, #E5A800)",
    accent: "#3D2E00",
  },
  {
    eyebrow: "Build",
    title: "Websites & Software",
    body: "Landing pages, full websites, custom CRM and attendance systems — built around how your business actually runs.",
    tags: ["Websites", "Landing pages", "Custom CRM", "Attendance"],
    gradient: "linear-gradient(150deg, #2D3561, #14102E)",
    accent: "#C9CDEB",
  },
];

export default function ServiceCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);

  const go = (next: number) => {
    setActive((next + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative">
      {/* Stack — cards behind peek out, so it reads as a deck */}
      <div className="relative h-[440px] sm:h-[400px]">
        {SLIDES.map((slide, i) => {
          const offset = (i - active + SLIDES.length) % SLIDES.length;
          const isActive = offset === 0;
          const depth = Math.min(offset, 3);

          return (
            <div
              key={slide.title}
              onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                const delta = e.changedTouches[0].clientX - touchStart.current;
                if (Math.abs(delta) > 50) go(active + (delta < 0 ? 1 : -1));
              }}
              className="absolute inset-0 rounded-[28px] p-8 sm:p-10 flex flex-col justify-between"
              style={{
                background: slide.gradient,
                transform: `translateY(${depth * 14}px) scale(${1 - depth * 0.04})`,
                opacity: offset > 2 ? 0 : 1,
                zIndex: SLIDES.length - depth,
                pointerEvents: isActive ? "auto" : "none",
                boxShadow: isActive
                  ? "0 30px 70px rgba(20,16,46,0.28)"
                  : "0 12px 30px rgba(20,16,46,0.14)",
                transition:
                  "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease, box-shadow 0.5s ease",
              }}
            >
              <div>
                <p
                  className="eyebrow"
                  style={{ color: slide.accent, opacity: 0.85 }}
                >
                  {slide.eyebrow}
                </p>
                <h3
                  className="display text-white mt-3"
                  style={{ fontSize: "clamp(26px, 4.5vw, 40px)" }}
                >
                  {slide.title}
                </h3>
                <p className="text-white/75 text-[15px] leading-relaxed mt-4 max-w-md">
                  {slide.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {slide.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12.5px] font-semibold px-3.5 py-2 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.18)",
                      color: "#fff",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              aria-label={s.title}
              className="h-2 rounded-full transition-all duration-400"
              style={{
                width: i === active ? 32 : 8,
                background: i === active ? "var(--ink)" : "rgba(20,16,46,0.18)",
              }}
            />
          ))}
        </div>

        <div className="flex gap-2">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              onClick={() => go(active + dir)}
              aria-label={dir < 0 ? "Previous" : "Next"}
              className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition hover:-translate-y-0.5"
              style={{ borderColor: "var(--ink)" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="var(--ink)"
                className="w-4 h-4"
                style={{ transform: dir < 0 ? "rotate(180deg)" : undefined }}
              >
                <path d="M4 11h12.2l-5.6-5.6L12 4l8 8-8 8-1.4-1.4 5.6-5.6H4v-2Z" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
