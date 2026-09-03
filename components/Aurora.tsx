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
    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

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

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={one}
        className="blob drift"
        style={{
          width: 560,
          height: 560,
          top: "-15%",
          left: "-10%",
          background: "var(--orange)",
          opacity: 0.16,
        }}
      />
      <div
        ref={two}
        className="blob drift"
        style={{
          width: 480,
          height: 480,
          top: "30%",
          right: "-12%",
          background: "var(--violet)",
          opacity: 0.14,
          animationDelay: "-9s",
        }}
      />
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
