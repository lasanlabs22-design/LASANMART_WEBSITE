/**
 * A phone around one of the drawn app screens. The screen is laid out
 * at the app's own 360×760 size and scaled by --s, so every tile and
 * label keeps the app's proportions at any size on the page. Set --s
 * per breakpoint through className, e.g. "[--s:0.6] sm:[--s:0.72]".
 */
export default function Device({
  children,
  className = "",
  label,
}: {
  children: React.ReactNode;
  className?: string;
  /** What the screen shows, for screen readers */
  label?: string;
}) {
  return (
    <div
      className={`device ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <div className="device-screen">{children}</div>
    </div>
  );
}
