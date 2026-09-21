"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades its children up when they scroll into view. Also sets
 * data-shown, so CSS can run child animations (marker swipe, list
 * stagger) at the same moment.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      data-shown={shown || undefined}
      className={className}
      style={
        {
          "--reveal-delay": `${delay}s`,
          opacity: shown ? 1 : 0,
          transform: shown ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
