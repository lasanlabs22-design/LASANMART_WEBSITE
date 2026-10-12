"use client";

import { useState } from "react";
import {
  BedDouble,
  Building2,
  Car,
  Check,
  Code,
  Dumbbell,
  Ellipsis,
  Factory,
  Gem,
  GraduationCap,
  Landmark,
  PartyPopper,
  Scissors,
  Shirt,
  ShoppingBag,
  Smartphone,
  Sofa,
  Sprout,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS_IDEAS } from "@/lib/businessIdeas";

/** Line icons standing in for the app's sector icons */
const SECTOR_ICONS: Record<string, LucideIcon> = {
  "Retail & Shops": ShoppingBag,
  "Restaurants & Cafes": UtensilsCrossed,
  "Real Estate": Building2,
  "Healthcare & Clinics": Stethoscope,
  "Education & Coaching": GraduationCap,
  Automotive: Car,
  "Fashion & Apparel": Shirt,
  "Beauty & Salon": Scissors,
  "Fitness & Gym": Dumbbell,
  "Travel & Hospitality": BedDouble,
  Jewellery: Gem,
  Electronics: Smartphone,
  "Home & Interiors": Sofa,
  Manufacturing: Factory,
  Agriculture: Sprout,
  "IT & Software": Code,
  "Financial Services": Landmark,
  "Events & Wedding": PartyPopper,
  Logistics: Truck,
  Other: Ellipsis,
};

export default function BusinessIdeas() {
  const [active, setActive] = useState(0);
  const idea = BUSINESS_IDEAS[active];
  const SectorIcon = SECTOR_ICONS[idea.sector] ?? Ellipsis;

  return (
    <div className="mt-12 sm:mt-16">
      {/* Sectors scroll sideways on phones, wrap above that */}
      <div
        className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0"
        role="group"
        aria-label="Pick your sector"
      >
        {BUSINESS_IDEAS.map((b, i) => {
          const on = i === active;
          const Icon = SECTOR_ICONS[b.sector] ?? Ellipsis;
          return (
            <button
              key={b.sector}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              aria-controls="idea-panel"
              className="shrink-0 inline-flex items-center gap-2 pl-2.5 pr-3.5 py-2 rounded-xl text-[13px] font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--violet)]"
              style={{
                background: on
                  ? "linear-gradient(135deg, var(--ink), #2a2160)"
                  : "#fff",
                color: on ? "#fff" : "var(--ink)",
                borderColor: on ? "var(--ink)" : "var(--line)",
                boxShadow: on ? "0 10px 22px rgba(20,16,46,0.22)" : "none",
              }}
            >
              <Icon
                size={15}
                strokeWidth={2}
                aria-hidden
                style={{ color: on ? "var(--yellow)" : "var(--violet)" }}
              />
              {b.sector}
            </button>
          );
        })}
      </div>

      <div
        id="idea-panel"
        aria-live="polite"
        data-spot
        className="card p-6 sm:p-9 mt-6 grid md:grid-cols-[1.2fr_1fr] gap-8"
        style={{ boxShadow: "0 24px 60px rgba(20,16,46,0.08)" }}
      >
        {/* Keyed so the copy re-rises each time the sector changes */}
        <div key={idea.sector} className="rise relative z-[2]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="icon-tile"
              style={
                {
                  "--tile": "#FF6B35",
                  width: 44,
                  height: 44,
                  background: "linear-gradient(145deg, #FF8A3D, #F2542D)",
                  color: "#fff",
                } as React.CSSProperties
              }
            >
              <SectorIcon size={20} strokeWidth={2} />
            </span>
            <p className="eyebrow" style={{ color: "var(--orange)" }}>
              {idea.sector}
            </p>
          </div>
          <h3
            className="display mt-3"
            style={{ fontSize: "clamp(24px, 3.4vw, 32px)" }}
          >
            {idea.headline}
          </h3>
          <p
            className="text-[15px] leading-relaxed mt-4"
            style={{ color: "var(--muted)" }}
          >
            {idea.overview}
          </p>

          <ul className="space-y-3 mt-6">
            {idea.opportunities.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-[14.5px]">
                <span
                  aria-hidden
                  className="w-5 h-5 shrink-0 mt-px rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(109,59,245,0.1)",
                    color: "var(--violet)",
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div
          key={`${idea.sector}-side`}
          className="rise relative z-[2] flex flex-col gap-4"
        >
          <div
            className="rounded-2xl p-5"
            style={{ background: "rgba(109,59,245,0.06)" }}
          >
            <p className="eyebrow" style={{ color: "var(--violet)" }}>
              Best services to start with
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {idea.bestServices.map((s) => (
                <span
                  key={s}
                  className="text-[13px] font-semibold px-3 py-1.5 rounded-xl bg-white"
                  style={{ border: "1px solid var(--line)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "rgba(255,197,41,0.14)",
              borderLeft: "4px solid var(--yellow)",
            }}
          >
            <p className="eyebrow" style={{ color: "var(--ink)" }}>
              On budget
            </p>
            <p className="text-[14.5px] leading-relaxed mt-2">
              {idea.budgetNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
