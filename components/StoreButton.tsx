"use client";

import { useState } from "react";
import { PLAY_STORE_URL } from "@/lib/site";

export default function StoreButton({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [nudged, setNudged] = useState(false);
  const live = PLAY_STORE_URL.length > 0;

  const inner = (
    <>
      <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor">
        <path d="M3.6 1.8a1.5 1.5 0 0 0-.6 1.2v18c0 .5.2.9.6 1.2l10-10.2-10-10.2Zm11.4 8.8 2.6-2.6-9.3-5.3 6.7 7.9Zm0 2.8-6.7 7.9 9.3-5.3-2.6-2.6Zm5.5-2.7-2.2-1.3-2.8 2.8 2.8 2.8 2.2-1.3c.9-.5.9-1.9 0-2.4l-.7.4Z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] opacity-70">
          {live ? "GET IT ON" : "COMING SOON TO"}
        </span>
        <span className="block text-[15px] font-bold">Google Play</span>
      </span>
    </>
  );

  const classes =
    "inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl font-semibold transition hover:-translate-y-0.5 active:translate-y-0";

  const style =
    variant === "dark"
      ? { background: "var(--ink)", color: "#fff" }
      : {
          background: "linear-gradient(135deg, #FF8A3D, #F2542D)",
          color: "#fff",
          boxShadow: "0 12px 30px rgba(255,107,53,0.32)",
        };

  if (!live) {
    return (
      <div className="relative">
        <button
          onClick={() => {
            setNudged(true);
            setTimeout(() => setNudged(false), 2600);
          }}
          className={classes}
          style={style}
        >
          {inner}
        </button>

        {nudged && (
          <div
            className="absolute left-0 top-full mt-2 text-[12.5px] px-3 py-2 rounded-xl rise whitespace-nowrap"
            style={{ background: "var(--yellow)", color: "var(--ink)" }}
          >
            Launching shortly — call us and we&apos;ll set you up today
          </div>
        )}
      </div>
    );
  }

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noreferrer"
      className={classes}
      style={style}
    >
      {inner}
    </a>
  );
}
