"use client";

import { useEffect, useRef } from "react";

/**
 * A silent, looping clip that behaves like a GIF: it loads and plays
 * only while it is on screen, pauses when it leaves, and stays on its
 * poster for anyone who asked for reduced motion.
 */
export default function LoopVideo({
  src,
  poster,
  className,
  style,
  label,
  active = true,
}: {
  src: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
  /** Describes the clip; omit when it is purely decorative */
  label?: string;
  /** False keeps it paused even on screen, e.g. a slide at the back */
  active?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!active) {
      video.pause();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay can still be refused (data saver); the poster stays
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={className}
      style={{ objectFit: "cover", ...style }}
    />
  );
}
