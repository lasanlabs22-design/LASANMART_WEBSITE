"use client";

import { useState } from "react";

/**
 * What each kind of partner sees and fills in on Lasan Hub. Copy and
 * lists come from the Hub app (WelcomeScreen, data/roles.ts,
 * lib/strength.ts), so keep them in step with it.
 */
const ROLES = [
  {
    key: "creators",
    label: "Creators",
    c: "#C13584",
    headline: "Brands find you, not the other way round",
    body: "Businesses across Andhra Pradesh browse creators on Lasan Mart. Set your rate once and let the work come to you.",
    steps: [
      ["Add your handle and rate", "We check the account is genuinely yours"],
      ["Businesses browse you", "They filter by what you post about and where you are"],
      ["We bring you the brief", "Our team handles the negotiating and the paperwork"],
    ],
    lists: ["Instagram handle", "What you post about", "Follower count", "Rate per post"],
    optionsTitle: "What you can post about",
    options: [
      "Fashion",
      "Food",
      "Fitness",
      "Beauty",
      "Travel",
      "Comedy",
      "Tech",
      "Lifestyle",
      "City page",
      "Anchor",
      "Dance",
      "Other",
    ],
    note: "Once approved, businesses browsing Lasan Mart see your name, photo, handle, following, category, city, rate and bio. Never your phone number or email.",
  },
  {
    key: "vendors",
    label: "Vendors",
    c: "#0EA97A",
    headline: "Steady work, without the chasing",
    body: "When a business needs hoardings, printing or a field team, our team comes to the vendors on this list first.",
    steps: [
      ["Tell us what you do", "Services, coverage area and rough pricing"],
      ["We verify your business", "Company details and GST, checked once"],
      ["We send you jobs", "Real briefs from businesses who have already paid"],
    ],
    lists: ["Company name", "GST number", "Services you offer", "Rate card"],
    optionsTitle: "Services you can offer",
    options: [
      "Hoardings",
      "Outdoor Ads",
      "LED Boards",
      "Transit Ads",
      "Print Media",
      "Event Marketing",
      "Local Engagement",
      "Direct Marketing",
      "Vehicle Branding",
      "Traditional Media",
      "Field Sales",
      "Telecalling",
      "Display Boards",
      "Exhibitions",
      "Corporate Events",
    ],
    note: "Vendors need a GST number. We work with registered businesses so invoicing is clean on both sides.",
  },
  {
    key: "freelancers",
    label: "Freelancers",
    c: "#3A86FF",
    headline: "Get briefed, not ghosted",
    body: "When our clients need a shoot, an edit, a campaign or an app, we come to you. No bidding, no undercutting, no chasing invoices.",
    steps: [
      ["Show us your work", "Skills, portfolio and what you charge"],
      ["We review it properly", "A real person looks at your portfolio"],
      ["Briefs come to you", "Scoped and priced before they reach you"],
    ],
    lists: ["Your skills", "Portfolio link", "Instagram handle", "Rate card"],
    optionsTitle: "Skills you can offer",
    options: ["Photography", "Videography", "Video Editing", "Digital Marketing", "Software Development"],
    note: "A portfolio can be anything that shows your work: Behance, a Google Drive folder, your Instagram or your own site.",
  },
] as const;

const SHARED = ["Your name", "Profile photo", "Email", "City", "A short description"];

export default function HubRoles() {
  const [active, setActive] = useState(0);
  const role = ROLES[active];

  return (
    <div
      className="rounded-[24px] p-6 sm:p-8 mt-10"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p className="eyebrow text-center" style={{ color: "var(--yellow)" }}>
        How joining works
      </p>

      <div
        className="flex justify-center gap-2 mt-6"
        role="group"
        aria-label="Partner type"
      >
        {ROLES.map((r, i) => {
          const on = i === active;
          return (
            <button
              key={r.key}
              type="button"
              aria-pressed={on}
              aria-controls="hub-role-panel"
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-xl text-[13.5px] font-semibold transition-colors"
              style={{
                background: on ? r.c : "rgba(255,255,255,0.06)",
                color: on ? "#fff" : "rgba(255,255,255,0.7)",
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      <div
        key={role.key}
        id="hub-role-panel"
        aria-live="polite"
        className="rise grid md:grid-cols-2 gap-8 mt-8"
      >
        <div>
          <h3
            className="display text-white"
            style={{ fontSize: "clamp(22px, 3vw, 28px)" }}
          >
            {role.headline}
          </h3>
          <p className="text-white/60 text-[15px] leading-relaxed mt-3">
            {role.body}
          </p>

          <ol className="space-y-4 mt-6">
            {role.steps.map(([title, text], i) => (
              <li key={title} className="flex gap-3.5">
                <span
                  className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-[12.5px] font-bold text-white"
                  style={{ background: role.c }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-white text-[14.5px] font-semibold">{title}</p>
                  <p className="text-white/50 text-[13.5px] mt-0.5">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-white/45 text-[12px] font-bold tracking-[0.14em] uppercase">
              Your profile
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[...SHARED, ...role.lists].map((f) => (
                <span
                  key={f}
                  className="text-[12.5px] font-medium px-3 py-1.5 rounded-xl text-white/85"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white/45 text-[12px] font-bold tracking-[0.14em] uppercase">
              {role.optionsTitle}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {role.options.map((o) => (
                <span
                  key={o}
                  className="text-[12.5px] font-semibold px-3 py-1.5 rounded-xl"
                  style={{
                    background: `color-mix(in srgb, ${role.c} 22%, transparent)`,
                    color: "#fff",
                  }}
                >
                  {o}
                </span>
              ))}
            </div>
          </div>

          <p
            className="text-[13.5px] leading-relaxed rounded-2xl p-4 text-white/70"
            style={{
              background: "rgba(255,197,41,0.08)",
              borderLeft: "3px solid var(--yellow)",
            }}
          >
            {role.note}
          </p>
        </div>
      </div>
    </div>
  );
}
