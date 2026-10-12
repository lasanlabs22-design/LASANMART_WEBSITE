"use client";

import { useState } from "react";
import { BUSINESS_IDEAS } from "@/lib/businessIdeas";

export default function BusinessIdeas() {
  const [active, setActive] = useState(0);
  const idea = BUSINESS_IDEAS[active];

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
          return (
            <button
              key={b.sector}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              aria-controls="idea-panel"
              className="shrink-0 px-3.5 py-2 rounded-xl text-[13px] font-semibold border transition-colors"
              style={{
                background: on ? "var(--ink)" : "#fff",
                color: on ? "#fff" : "var(--ink)",
                borderColor: on ? "var(--ink)" : "var(--line)",
              }}
            >
              <span aria-hidden className="mr-1.5">
                {b.emoji}
              </span>
              {b.sector}
            </button>
          );
        })}
      </div>

      <div
        id="idea-panel"
        aria-live="polite"
        className="card p-6 sm:p-9 mt-6 grid md:grid-cols-[1.2fr_1fr] gap-8"
      >
        {/* Keyed so the copy re-rises each time the sector changes */}
        <div key={idea.sector} className="rise">
          <p className="eyebrow" style={{ color: "var(--orange)" }}>
            {idea.sector}
          </p>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="var(--violet)"
                  className="w-4 h-4 shrink-0 mt-0.5"
                  aria-hidden
                >
                  <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z" />
                </svg>
                {o}
              </li>
            ))}
          </ul>
        </div>

        <div key={`${idea.sector}-side`} className="rise flex flex-col gap-4">
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
