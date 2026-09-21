"use client";

import { useEffect, useRef } from "react";

/**
 * Slow-moving colour that follows the cursor. Runs on the GPU via
 * transforms only — no repainting, so it stays smooth.
 */
export default function Aurora() {
  const one = useRef<HTMLDivElement>(null);
  const two = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Touch screens have no cursor to follow, and reduced-motion users
    // asked us not to — skip the loop entirely for both
    const canFollow = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    ).matches;
    if (!canFollow) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      // Ease towards the cursor rather than snapping — the lag is
      // what makes it feel like a fluid rather than a follower
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;

      if (one.current) {
        one.current.style.transform = `translate3d(${currentX * 70}px, ${currentY * 60}px, 0)`;
      }
      if (two.current) {
        two.current.style.transform = `translate3d(${currentX * -90}px, ${currentY * -50}px, 0)`;
      }

      // Stop once we've settled; the next mousemove wakes it back up
      const settled =
        Math.abs(targetX - currentX) < 0.001 &&
        Math.abs(targetY - currentY) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* The wrapper follows the cursor; the blob inside drifts. Kept
          separate because a CSS animation would override the JS transform */}
      <div
        ref={one}
        className="absolute"
        style={{ width: 560, height: 560, top: "-15%", left: "-10%" }}
      >
        <div
          className="blob drift inset-0"
          style={{ background: "var(--orange)", opacity: 0.16 }}
        />
      </div>
      <div
        ref={two}
        className="absolute"
        style={{ width: 480, height: 480, top: "30%", right: "-12%" }}
      >
        <div
          className="blob drift inset-0"
          style={{
            background: "var(--violet)",
            opacity: 0.14,
            animationDelay: "-9s",
          }}
        />
      </div>
      <div
        className="blob drift"
        style={{
          width: 340,
          height: 340,
          bottom: "5%",
          left: "35%",
          background: "var(--yellow)",
          opacity: 0.13,
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
