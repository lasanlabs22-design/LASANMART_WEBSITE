import type { LucideIcon } from "lucide-react";

/**
 * A rounded tile holding one line icon, tinted with its accent colour.
 * `dark` is for tiles sitting on the ink sections; `solid` fills it
 * with the colour, for tiles sitting over photos or video.
 */
export default function IconTile({
  icon: Icon,
  color,
  size = 52,
  dark = false,
  solid = false,
  className = "",
}: {
  icon: LucideIcon;
  color: string;
  size?: number;
  dark?: boolean;
  solid?: boolean;
  className?: string;
}) {
  const background = solid
    ? `linear-gradient(145deg, ${color}, color-mix(in srgb, ${color} 70%, #000))`
    : dark
      ? `linear-gradient(145deg, color-mix(in srgb, ${color} 34%, transparent), color-mix(in srgb, ${color} 12%, transparent))`
      : `linear-gradient(145deg, color-mix(in srgb, ${color} 16%, #fff), color-mix(in srgb, ${color} 6%, #fff))`;

  return (
    <span
      aria-hidden
      className={`icon-tile ${className}`}
      style={
        {
          "--tile": color,
          width: size,
          height: size,
          background,
          color: dark || solid ? "#fff" : color,
        } as React.CSSProperties
      }
    >
      <Icon size={Math.round(size * 0.44)} strokeWidth={1.9} />
    </span>
  );
}
